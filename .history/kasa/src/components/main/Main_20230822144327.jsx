import React from 'react'
import  "./Main.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function Main({children}) {
  return (
    <div className="main">{children}</div>
  )
}

export default Main