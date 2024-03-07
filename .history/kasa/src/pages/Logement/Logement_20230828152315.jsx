import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ApartmentWrapper = styled.div`
  color: ${colors.primary};
  div:first-child {
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 400;
    margin-block: 0;
  }
  h2 {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-size: 20px;
  }
`

const ApartmentDescriptionArea = styled.div`
  display: flex;
  gap: 1rem;
`

const Logement = () => {
  return (
    <ApartmentWrapper className="apartment.page">
      <ApartmentBanner />
      <ApartmentHeader />

      <ApartmentDescriptionArea>
        <ApartmentDescription />
        <ApartmentDescription />
      </ApartmentDescriptionArea>
    </ApartmentWrapper>
  )
}

export default Logement
