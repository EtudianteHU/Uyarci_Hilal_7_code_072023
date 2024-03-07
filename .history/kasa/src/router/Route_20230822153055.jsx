*import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home'


function route() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<layout />}>
              <Route index element={<Home />} />

              
             
        </Route>
    </Routes>
     </BrowserRouter>
  )
}
export default route;*/}