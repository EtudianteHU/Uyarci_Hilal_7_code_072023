import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { ApartmentBanner } from '../apartmentBanner/ApartmentBanner'

// Définition des styles avec styled-components
const ApartmentWrapper = styled.div`
  color: $color-primary;
  h1 {
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const ApartmentBanner = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ApartmentTitle = styled.div``

const ApartmentOwner = styled.div``

const ApartmentDescription = styled.div`
  /* Styles pour la description de l'appartement */
`

function Apartment() {
  return (
    <ApartmentWrapper className="apartment.page">
      <ApartmentBanner />
      <div className="apartment-header">
       
        </ApartmentOwner>
        <div className="apartment_description_area">
          <ApartmentDescription />
          <ApartmentDescription />
        </div>
      </div>
    </ApartmentWrapper>
  )
}

export default Apartment
