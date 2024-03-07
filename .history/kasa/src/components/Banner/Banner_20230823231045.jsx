import React from 'react'
import styled from 'styled-components'

const Ban = styled.img`
  position: relative;
  background-position: center;
  background-size: cover;
  padding-inline: 0.2rem;
  min-height: 140px;
  margin: auto;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  color: white;
  margin-bottom: 2rem;
  max-width: 100%;
`
const text = styled.h2``
function Banner() {
  return (
    <div className="banner">
      <img src="banner.png" alt="banner" />
      <h2>Chez vous,partout et ailleurs</h2>
    </div>
  )
}

export default Banner
