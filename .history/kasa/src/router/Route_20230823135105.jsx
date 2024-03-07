import React from 'react'
import ReactDOM from 'react-dom'; 
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

              <RouterRoute path='/home' element={<Home/>} />
              <RouterRoute path='/about' element={<About/>} />
              <Router path='/logements/:logementId' element={<Logement />} />
              <RouterRoute path='/*' element={<Error/>} />
          </RouterRoute>
      </Routes>
      </BrowserRouter>
  );
  }
  ReactDOM.render(
    <React.StrictMode>
         <CustomRoute />
    </React.StrictMode>,
    document.getElementById('root')
    );
    
  export default CustomRoute