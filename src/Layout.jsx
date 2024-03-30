import React from 'react'
import Nav from './components/navBar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'

function Layout() {
  const value = useSelector((state) => state.login.status)
  return (
    <>
      <Nav />
      <Outlet />
      {/* {value && <Footer />} */}
      <Footer />
    </>
  )
}

export default Layout
