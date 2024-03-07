import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'

const Logement = () => {
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

export default Logement
