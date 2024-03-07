import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import  FontAwesomeIcon  from '@fortawesome/react-fontawesome'
import  faChevronUp  from '@fortawesome/free-solid-svg-icons'
import  ApartmentBanner  from '../apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader/'

// Définition des styles avec styled-components

const ApartmentWrapper = styled.div`
  color: $color-primary;
  h1 {
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

function Apartment() {
  return (
    <ApartmentWrapper className="apartment.page">
      <ApartmentBanner />
      <ApartmentHeader />

      <div className="apartment_description_area">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </ApartmentWrapper>
  )
}

export default Apartment
