import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home'
im

function route() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/logements/:logementId' element={<Lodging />} />

              <Route path='/*' element={<ErrorPage />} />
        </Route>
    </Routes>
     </BrowserRouter>
  )
}