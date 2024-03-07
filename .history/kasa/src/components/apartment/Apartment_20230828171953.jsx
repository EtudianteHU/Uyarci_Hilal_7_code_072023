import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import ApartmentBanner from '../apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../banner/apartmentHeader'
import ApartmentDescription from '../apartmentDescription/ApartmentDescription'

// Définition des styles avec styled-components

const ApartmentWrapper = styled.div`
  color: ${colors.primary};
  h1 {
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  @media  @media screen and (width<=768px) {
    flex-direction: column;
  }
  .apartment_description_area {
    flex-direction: column;
  }
`

function Apartment() {
  return (
    <ApartmentWrapper className="apartment.page">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment_description_area">
        <ApartmentDescription />
      </div>
    </ApartmentWrapper>
  )
}

export default Apartment
