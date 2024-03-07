import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  min-height: 100px;
  display: grid;
  place-items: center;
`

function Footer() {
  return (
    <StyledFooter>
      <div className="footer_logo">
        <img src="logo-footer.png" alt="logo" width="100" />
      </div>
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
    </StyledFooter>
  )
}

export default Footer
