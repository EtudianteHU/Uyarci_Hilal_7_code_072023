import React from 'react'
import styled from 'styled-components'
import

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  min-height: 100px;
  display: grid;
  place-items: center;
`
const Logo = styled.div``
const StyledFooter = styled.div``
const StyledFooter = styled.div``

function Footer() {
  return (
    <StyledFooter>
      <LogoWrapper>
        <LogoFooter src={logo} alt="logo" />
      </LogoWrapper>
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </StyledFooter>
  )
}

export default Footer
