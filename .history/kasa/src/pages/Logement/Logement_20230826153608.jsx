import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


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
