import React from 'react'
import  "./Main.css"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    pa
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);