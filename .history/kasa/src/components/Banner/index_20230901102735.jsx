import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import bannerimg
const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BannerImage = styled.img`
  width: 100%;
  height: 220px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bannerimg});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`

const BannerText = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${colors.colorTertiary};
`

function Banner() {
  return (
    <BannerWrapper>
      <BannerImage alt="Image de la bannière">
        <BannerText>Chez vous, partout et ailleurs</BannerText>
      </BannerImage>
    </BannerWrapper>
  )
}

export default Banner
