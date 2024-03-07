import React from 'react'
import Header from '../components/header/Header'

function Layout() {
  return (
<div className="layout">
    <Header />
    <Outlet />
    <Footer />
</div>
  )
}

export default Layout