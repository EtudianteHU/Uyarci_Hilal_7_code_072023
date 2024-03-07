import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import colors from '../../utils/style/colors'
import ApartmentBanner from '../apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader/'
import ApartmentDescription from '../apartmentDescription/ApartmentDescription'

// Définition des styles avec styled-components

const ApartmentWrapper = styled.div`
  color: ${colors.primary};
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
      </div>
    </ApartmentWrapper>
  )
}

export default Apartment
