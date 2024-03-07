import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"


export default function Header() {
  return ( 
    <nav className="navbar">
      <NavLink to=""
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
