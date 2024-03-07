import React from 'react'
import "./Header.css"
import './..'

export default function Header() {
  return ( 
    <nav className="navbar">
      <div className="navbar_logo">
       <img src="logo.png" alt="Logo"/>
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
     
  ) 
      
  
}
