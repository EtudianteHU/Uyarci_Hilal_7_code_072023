import React from 'react'
import  "./Main.css"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const
function Main({children}) {
  return (
    <div className="main">{children}</div>
  )
}

export default Main