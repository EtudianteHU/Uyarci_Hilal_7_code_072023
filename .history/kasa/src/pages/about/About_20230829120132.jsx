import React from 'react'
import ApartmentBanner from '../../components/apartmentBanner/ApartmentBanner'
import ApartmentDescription from '../../components/apartmentDescription/ApartmentDescription'
import Main from '../../components/main/Main'
function About() {
  return (
    <>
      <Main>
        <ApartmentBanner />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
      </Main>
    </>
  )
}

export default About
