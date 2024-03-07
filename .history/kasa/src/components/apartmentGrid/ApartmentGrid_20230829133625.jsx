import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

fetch('manifest.json')
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch(console.error)

const GridApartment = styled.div`
  background-color: ${colors.backgroundDark};
  min-height: 50vh;
  border-radius: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    background-color: ${colors.colorTertiary};
    padding: 0;
    justify-content: center;
  }
`
const StyledApartment = styled(Link)`
  background-image: linear-gradient(to top, #863535, #ff6060);
  border-radius: 1rem;
  justify-content: space-between;
  flex-basis: 30%;
  display: grid;
  align-items: end;
  min-width: 200px;
  min-height: 300px;

  .apartment_subtitle {
    width: 50%;
    margin-inline-start: 0.5rem;
    margin-block-end: 0.5rem;
    color: white;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;

    .apartment_subtitle {
      width: 100%;
      margin-inline-start: 0.5rem;
      margin-block-end: 0.5rem;
      color: white;
    }
  }
`

function ApartmentGrid() {
  const [apartments, setApartments] = useState([])
useEffect(fetchApartments,[])

function fetchApartments(){ 
   fetch('manifest.json')
   then((res)) =>res.json())
   .then((res) => setApartments(res)
  .catch(console.error)
}
  return (
    <div className="grid">
     apartments.map(apartment) =>
      <GridApartment>
        <StyledApartment>
          <Link to="/Apartment">Titre de la location</Link>
        </StyledApartment>
        <StyledApartment>
          <Link to="/Apartment">Titre de la location</Link>
        </StyledApartment>
        <StyledApartment>
          <Link to="/Apartment">Titre de la location</Link>
        </StyledApartment>
        <StyledApartment>
          <Link to="/Apartment" s>
            Titre de la location
          </Link>
        </StyledApartment>
      </GridApartment>
    </div>
  )
}
export default ApartmentGrid
