import React from 'react'
import  "./Main.css"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/flat",
    element:<h1>Nos</h1>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react'

function Main() {
  return (
    <div>Main</div>
  )
}

export default Main