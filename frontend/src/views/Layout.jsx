import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header />
    <div className="body">
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Layout