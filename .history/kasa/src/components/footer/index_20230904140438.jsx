import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo-footer.png'

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  min-height: 100px;
  display: grid;
  place-items: center;
  @media screen and (width<=768px) {
    bottom: -6px;
  }
`
const LogoWrapper = styled.div`
  display: flex;
  height: 80px;
`
const LogoFooter = styled.img`
  height: 50px;
`
const FooterText = styled.div``

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
