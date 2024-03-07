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
    element:<h1>Nos appartements</h1>
  },
  {
    path:"/about",
    element:<h1>A propos</h1>
  },
  {
    path:"/404",
    element:<h1>404</h1>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import React from 'react'

function Main(c) {
  return (
    <div>Main</div>
  )
}

export default Main
