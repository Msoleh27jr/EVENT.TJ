import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../../widgets/header/header'
import Footer from '../../../widgets/footer/footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout