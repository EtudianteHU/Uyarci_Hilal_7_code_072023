import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/img/logo.png'
import colors from '../../utils/style/colors'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: ${colors.primary};
  font-weight: 700;
  gap:2rem;
  @media screen and (width<=)
`

const Logo = styled.img`
  height: 80px;
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  color: ${colors.primary};
  font-weight: 700;
  gap: 2rem;
  margin-left: auto;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.primary};
  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo du header" />
      <Navigation>
        <StyledLink exact to="/" activeClassName="active">
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1" activeClassName="active">
          A propos
        </StyledLink>
      </Navigation>
    </HeaderWrapper>
  )
}
export default Header
