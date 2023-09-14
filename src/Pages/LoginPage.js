import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import panteonImage from '../Images/panteon.jpg'
import axios from 'axios'
import '../Css/PageCss/PageLogin.css'

export default function LoginPage() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signInFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'POST',

        url: 'http://furkanarikan.online/api/Account/authenticate',
        data: {
          username,
          password,
        },
      })

      if (response.data) {
        if (response.data.success == false) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
          localStorage.setItem('token', response.data.data.token)
          navigate('/build')
        }
      } else {
        console.error('Oturum açma başarısız.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className='loginPageForm' onSubmit={signInFormSubmit}>
      <div className='loginPageContainer'>
        <div className='loginPageGridItem '>
          <div className='loginCardHeader'>
            <div style={{ textAlign: 'center' }}>
              <img
                src={panteonImage}
                style={{ marginBottom: '1rem' }}
                width='50%'
                class='rounded-circle'
              />
              <div>
                <span class='fs-1'>Panteon Demo Project Login Page</span>
              </div>
            </div>
          </div>
        </div>
        <div className='loginPageGridItem'>
          <div className='loginCardBody'>
            <div className='loginCardBodyUserName'>
              <div style={{ width: '100%' }}>
                <label
                  for='username'
                  class='form-label'
                  style={{ marginBottom: '1.5rem' }}
                >
                  UserName
                </label>
                <input
                  style={{ height: '3.5rem' }}
                  type='text'
                  class='form-control fs-5'
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                  name='username'
                  placeholder='Enter Your Username'
                />
              </div>
            </div>
            <div className='loginCardBodyPassword'>
              <div style={{ width: '100%' }}>
                <label
                  for='password'
                  class='form-label'
                  style={{ marginBottom: '1.5rem' }}
                >
                  Password
                </label>
                <input
                  style={{ height: '3.5rem' }}
                  type='password'
                  class='form-control fs-5'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  name='password'
                  placeholder='Enter Your Passwornd'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='loginPageGridItem'>
          <div className='loginCardFooter'>
            <button
              type='submit'
              class='btn btn-primary fs-3'
              style={{ width: '15rem' }}
            >
              Login
            </button>
            <NavLink to='/register'>
              <button
                style={{
                  width: '15rem',
                }}
                class='btn btn-primary fs-3'
              >
                <i
                  style={{ marginRight: '1rem' }}
                  class='bi bi-arrow-right'
                ></i>
                Register Page
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  )
}
