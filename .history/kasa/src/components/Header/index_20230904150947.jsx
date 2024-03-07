import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import colors from '../../utils/style/colors'
import Navigation from '../nav'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${colors.primary};
  font-weight: 700;
`

const Logo = styled.img`
  height: 50px;
`
function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
      <Navigation />
    </HeaderWrapper>
  )
}
export default Header
