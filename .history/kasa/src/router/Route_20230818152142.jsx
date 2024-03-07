import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home'

function route() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        </Route>
    </Routes>
     </BrowserRouter>
  )
}

export default routeexport default function Router() {
  return (
      <Routes>
          <Route element={<Layout />}>
              <Route index element={<Home />} />

              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/logements/:logementId' element={<Lodging />} />

              <Route path='/*' element={<ErrorPage />} />
          </Route>
      </Routes>
  );
}