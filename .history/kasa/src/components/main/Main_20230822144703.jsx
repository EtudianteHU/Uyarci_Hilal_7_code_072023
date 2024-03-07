import React from 'react'
import  "./Main.css"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element
  }
])
function Main({children}) {
  return (
    <div className="main">{children}</div>
  )
}

export default Main