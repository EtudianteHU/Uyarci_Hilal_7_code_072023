import React from 'react'
import "./ApartmentGrid.css"
import Apartement from './components/apartementApartement.jsx'

function ApartmentGrid() {
  return (
    <div className="grid">
        <Apartment/>
        <Apartment/>
        <Apartment/>
        <Apartment/>
    </div>
  )
}

export default ApartmentGrid