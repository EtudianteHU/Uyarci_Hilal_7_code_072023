import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"

function styleLink(){
  console.log("we are styling the link")
}
export default function Header() {
  return ( 
    <nav className="navbar">
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <NavLink to="/" style=>{styleLink}>
      Accueil</NavLink>
      <NavLink to="/about">
      <div>A propos</div>
      </NavLink>
    </nav>
     
  ) 
      
  
}
