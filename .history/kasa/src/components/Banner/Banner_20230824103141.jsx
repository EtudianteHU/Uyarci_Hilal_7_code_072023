import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
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
  &:before {
    position: absolute;
    content: '';
    opacity: 0.5;
    border-radius: 2rem;
  }
`

const BannerText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-
`

function Banner() {
  return (
    <BannerWrapper className="banner">
      <BannerImage src="banner.png" alt="banner" />
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerWrapper>
  )
}

export default Banner
