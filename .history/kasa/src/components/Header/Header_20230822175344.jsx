import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

function styleLink(){
  console.log
}
export default function Header() {
  return ( 
    <nav className="navbar">
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <NavLink to="/" style=>{</nav>>Accueil</NavLink>
      <NavLink to="/about">
      <div>A propos</div>
      </NavLink>
    </nav>
     
  ) 
      
  
}
