import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/banner'
import colors from '../../utils/style/colors'

const Body = styled.div`
  background-color: ${colors.primary};
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

function Home() {
  return (
    <Body>
      <Banner />
    </Body>
  )
}

export default Home
