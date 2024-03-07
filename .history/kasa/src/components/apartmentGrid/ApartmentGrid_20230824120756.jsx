import React from 'react'
import styled from 'styled-components'
import Apartment from './../apartment/Apartment'

const Apartment = style.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
`

function ApartmentGrid() {
  return (
    <div className="grid">
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  )
}

export default ApartmentGrid
