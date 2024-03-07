import React from 'react'
import ./Header.css';
const Header = () => {
  return (
    <Header className= "header">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo"/>
      </div>
      <div>Accueil</div>
      <div>A propos</div>
      </Header>
      
  )
}

export default Header