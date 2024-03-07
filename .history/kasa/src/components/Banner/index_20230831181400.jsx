import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  background-position: center;
  background-size: cover;
  padding-inline: 0.2rem;
  height: 220px;
  margin: auto;
  border-radius: 2rem;
  display: grid;
  place-items: center;
  color: white;
  margin-bottom: 2rem;
  width: 100%;
  &:before {
    position: absolute;
    content: '';
    opacity: 0.5;
    border-radius: 2rem;
  }
`

const BannerText = styled.h2`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

function Banner() {
  return (
    <BannerWrapper>
      <BannerImage alt="Image de la bannière"></BannerImage>
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    
  )
}

export default Banner
