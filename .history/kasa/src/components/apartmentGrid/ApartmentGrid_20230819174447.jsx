import React from 'react'
import "./ApartmentGrid.css"
import Apartment from './../apartment/Apartment'
import Banner from './..'
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