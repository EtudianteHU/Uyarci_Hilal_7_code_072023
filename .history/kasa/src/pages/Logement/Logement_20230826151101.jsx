import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'
import
const ApartmentWrapper = styled.div`
  color: ${colors.primary};
  h1 {
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const Logement = () => {
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

export default Logement
