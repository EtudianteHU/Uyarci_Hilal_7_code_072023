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


function ApartmentGrid() {
  const [apartments, setApartments] = useState([])
  useEffect(fetchApartments, [])

  function fetchApartments() {
    fetch('manifest.json')
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error)
  }
  return (
    <div className="grid">
      apartments.map{(apartment) => <div>(apartment.title)</div>}
      <GridApartment>
        <Apartme
      </GridApartment>
    </div>
  )
}
export default ApartmentGrid
