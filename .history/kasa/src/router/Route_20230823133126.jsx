import React from 'react'
import { BrowserRouter, Route as Router , Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Logement from '../pages/Logement/Logement';
import About from '../pages/about/About';
import Layout from '../layout/Layout';


 function CustomRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/logements/:logementId' element={<Logement />} />

              <Route path='/*' element={<Error />} />
          </Route>
      </Routes>
      </BrowserRouter>
  );
  }
  export default CustomRoute