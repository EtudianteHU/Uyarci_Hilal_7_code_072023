import React from 'react'
import
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