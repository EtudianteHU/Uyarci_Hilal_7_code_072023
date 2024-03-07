import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Main from '../../main/Main'
import {O}

function Layout() {
  return (
<div className="layout">
    <Header />
    <Main/>
    <Outlet />
    <Footer />
    <Main/>
</div>
  )
}

export default Layout