import React from 'react'
import "./ApartmentGrid.css"

function ApartmentGrid() {
  return (
    <div className="grid">
        <Apartment/>
        <Apartment/>
        <Apartment/>
        <ApartmentGrid
    </div>
  )
}

export default ApartmentGrid