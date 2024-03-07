import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

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
    color: ${colors.colorTertiary};
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;

    .apartment_subtitle {
      width: 100%;
      margin-inline-start: 0.5rem;
      margin-block-end: 0.5rem;
      color: ${colors.colorTertiary};
    }
  }
`
function ApartmentCard(props) {
  return (
   <Link to="/"
  )
}

export default ApartmentCard
