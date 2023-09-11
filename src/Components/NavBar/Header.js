import React from 'react'
import panteonImage from '../../Images/panteon.jpg'
import { useNavigate } from 'react-router-dom'
import '../../Css/ComponentCss/NavBarCss/Header.css'

export default function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='headerContainer'>
      <div className='logoSide'>
        <img
          className='logoImage'
          src={panteonImage}
          width='70%'
          class='rounded-circle'
        />
      </div>
      <div className='menuSide'>
        <div>
          <button
            style={{
              width: '10rem',
              borderRadius: '4rem',
              border: '1px solid #fb6b0b',
            }}
            class='btn btn-light fs-3'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
