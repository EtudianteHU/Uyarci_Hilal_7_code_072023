import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Layout() {
  return (
<div className="layout">
    <Header />
    <M
    <Outlet />
    <Footer />
</div>
  )
}

export default Layout