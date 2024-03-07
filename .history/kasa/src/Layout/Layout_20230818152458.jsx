import React from 'react'

function Layout() {
  return (
    <div><div className="layout">
    <Header />
    <Outlet />
    <Footer />
</div>
  )
}

export default Layout