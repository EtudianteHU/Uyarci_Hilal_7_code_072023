import React from 'react'
import { BrowserRouter, Route as RouterRoute , Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Logement from '../pages/Logement/Logement';
import About from '../pages/about/About';
import Layout from '../layout/Layout';


 function CustomRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <RouterRoute element={<Layout />}>
              <RouterRoute index element={<Home />} />

              <RouterRoute path='/flat' element={<Logement/>} />
              <RouterRoute path='/about' element={<h1>A propos</h1>} />
              <RouterRoute path='/*' element={<h1>404 Not Found</h1>} />
          </RouterRoute>
      </Routes>
      </BrowserRouter>
  );
  }
  ReactDOM.render(
    <React.StrictMode>
    <Main />
    </React.StrictMode>,
    document.getElementById('root')
    );
    
  export default CustomRoute