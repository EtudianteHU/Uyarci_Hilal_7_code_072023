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

              <RouterRoute path='/' element={<Home />} />
              <RouterRoute path='/about' element={<About />} />
              <RouterRoute path='/logements/:logementId' element={<Logement />} />

              <RouterRoute path='/*' element={<Error />} />
          </RouterRoute>
      </Routes>
      </BrowserRouter>
  );
  }
  export default CustomRoute