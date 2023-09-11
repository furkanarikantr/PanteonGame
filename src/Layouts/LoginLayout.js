import React from 'react'
import '../Css/LayoutCss/LayoutLogin.css'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className='loginLayout'>
      <Outlet />
    </div>
  )
}
