import React from 'react'
import styled from 'styled-components'

const GridApartment = styled.div`
  background-color: rgba(0, 0, 0, 0.119);
  min-height: 50vh;
  border-radius: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    background-color: white;
    padding: 0;
    justify-content: center;
  }
`

function ApartmentGrid() {
  return (
    <div className="grid">
      <GridApartment >
        <StyledApartmen/>
        <GridApartment
    </div>
  )
}
export default ApartmentGrid
