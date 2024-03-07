import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentHeader from '../../components/apartmentHeader'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'

const Logement = () => {
  return (
    <div>
      <ApartmentBanner />
      <ApartmentHeader />
      <ApartmentDescription />
      <ApartmentDescription />
    </div>
  )
}

export default Logement
