import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/NavBar/Footer'
import Header from '../Components/NavBar/Header'
import '../Css/LayoutCss/LayoutDasboard.css'

export default function DashboardLayout() {
  return (
    <div className='dashboardLayout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
