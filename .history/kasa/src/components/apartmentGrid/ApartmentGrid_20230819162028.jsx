import React from 'react'
import "./ApartmentGrid.css"
import apartement from './Apartement.jsx'

function ApartmentGrid() {
  return (
    <div className="grid">
        <apartment/>
        <apartment/>
        <apartment/>
        <apartment/>
    </div>
  )
}

export default ApartmentGrid