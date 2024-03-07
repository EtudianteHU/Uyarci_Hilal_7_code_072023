import React from 'react'
import H
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