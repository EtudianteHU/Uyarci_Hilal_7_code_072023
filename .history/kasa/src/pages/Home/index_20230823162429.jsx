import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner/Banner'
import Logement from '../Logement/Logement'
import ApartmentGrid from '../../components/apartmentGrid/ApartmentGrid'
import colors from '../../utils/style/colors'

const Body = styled.div`
background-color: ${colors.primary};

`



function Home() {
  return (
    <Body>
      <Banner />
      <ApartmentGrid />
    </Body>
  )
}

export default Home
