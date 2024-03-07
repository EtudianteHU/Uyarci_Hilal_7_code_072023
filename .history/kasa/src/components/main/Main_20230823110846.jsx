import React from 'react'
import  "./Main.css"
import { ReactDOM } from 'react-router-dom';
import { createRoutes, RouterProvider} from "react-router-dom";
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
    e
Sever Sireci11:02
import React from 'react';
import './Main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../../App';

function Main({ children }) {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/flat" element={<h1>Nos appartements</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />