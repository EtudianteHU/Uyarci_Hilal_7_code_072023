import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const HeaderWrapper = styled.header`

  display: flex;
    align-items: center;
    padding-inline: 3rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,-0,-0,-0.1);
    color: #ff6060;
    font-weight: 700;
    gap: 2rem;

`


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
export default Header