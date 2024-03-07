import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"


 function Header() {
  return ( 
    <nav className="navbar">
      <NavLink to="/"></NavLink>
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <NavLink to="/" >
      Accueil</NavLink>
      <NavLink to="/about">
      <div>A propos</div>
      </NavLink>
    </nav>
     
  ) 
}
export default 