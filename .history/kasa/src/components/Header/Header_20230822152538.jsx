import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


export default function Header() {
  return ( 
    <nav className="navbar">
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <div>Accueil</div>
      <Link to=>
      <div>A propos</div>
      </Link>
    </nav>
     
  ) 
      
  
}
