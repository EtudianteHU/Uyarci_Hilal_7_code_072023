import React from 'react'
import styled from 'styled-components'
import Apartment from './../apartment/Apartment'

const Apartment = style.div`
background-color: rgba(0,0,0,0.119);
min-height:50vh;
border-radius:2rem ;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap:1rem;
padding: 1rem;
`

function ApartmentGrid() {
  return (
    <div className="grid">
      <Apartment />
      <StyledApartment />
      <StyledApartment />
      <StyledApartment />
    </div>
  )
}
export default ApartmentGrid
