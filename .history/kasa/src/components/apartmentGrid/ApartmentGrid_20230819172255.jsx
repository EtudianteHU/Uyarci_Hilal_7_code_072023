import React from 'react'
import "./ApartmentGrid.css"
import Apartment from './../apartment/Apartment

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