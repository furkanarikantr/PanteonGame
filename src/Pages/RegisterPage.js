import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import panteonImage from '../Images/panteon.jpg'

import '../Css/PageCss/PageRegister.css'
import axios from 'axios'

export default function RegisterPage() {
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const signUpFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'POST',

        url: 'https://furkanarikan.online/api/User/add-user',
        data: {
          userName,
          password,
          email,
        },
      })

      if (response.data) {
        if (response.data.success == false) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
          navigate('/')
        }
      } else {
        console.error('Oturum açma başarısız.')
      }
    } catch (error) {
      console.error('Oturum açma hatası:', error)
    }
  }

  return (
    <form onSubmit={signUpFormSubmit}>
      <div className='registerPageContainer'>
        <div className='registerPageGridItem '>
          <div className='registerCardHeader'>
            <div style={{ textAlign: 'center' }}>
              <img
                src={panteonImage}
                style={{ marginBottom: '1rem' }}
                width='50%'
                class='rounded-circle'
              />
              <div>
                <span class='fs-1'>Panteon Demo Project Register Page</span>
              </div>
            </div>
          </div>
        </div>
        <div className='loginPageGridItem'>
          <div className='registerCardBody'>
            <div className='registerCardBodyUserName'>
              <div style={{ width: '100%' }}>
                <label
                  for='username'
                  class='form-label'
                  style={{ marginBottom: '1.5rem' }}
                >
                  Username
                </label>
                <input
                  style={{ height: '3.5rem' }}
                  type='text'
                  class='form-control fs-5'
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  name='username'
                  placeholder='Enter Your Username'
                />
              </div>
            </div>
            <div className='registerCardBodyEmail'>
              <div style={{ width: '100%' }}>
                <label
                  for='username'
                  class='form-label'
                  style={{ marginBottom: '1.5rem' }}
                >
                  Email
                </label>
                <input
                  style={{ height: '3.5rem' }}
                  type='text'
                  class='form-control fs-5'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  name='username'
                  placeholder='Enter Your Email Address'
                />
              </div>
            </div>
            <div className='registerCardBodyPassword'>
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
                  placeholder='Enter Your Password'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='loginPageGridItem'>
          <div className='registerCardFooter'>
            <NavLink to='/'>
              <button class='btn btn-primary fs-3' style={{ width: '15rem' }}>
                <i style={{ marginRight: '1rem' }} class='bi bi-arrow-left'></i>
                Login Page
              </button>
            </NavLink>
            <button
              style={{ width: '15rem', marginRight: '1rem' }}
              class='btn btn-primary fs-3'
              type='submit'
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
