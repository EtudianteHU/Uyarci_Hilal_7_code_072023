import React from 'react'
import  "./Main.css"
import { ReactDOM } from 'react-dom';
//import { createRoutes, RouterProvider,} from "react-router-dom";
import App from '../../App';

function Main({children}) {
  return (
    <div className="main">{children}</div>
  )
}

export default Main

const routes=createRoutes([
  {
    path:"/",
    element:<App/>,
    errorElement:<h1>404 not found</h1>
  },
  {
    path:"/flat",
    element:<h1>Nos appartements</h1>
  },
  {
    path:"/about",
    element:<h1>A propos</h1>
  }

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider routes={routes} />
  </React.StrictMode>
);
