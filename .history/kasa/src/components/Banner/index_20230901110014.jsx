import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import bannerImg from '../../assets/bannerimg.png'

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BannerImage = styled.img`

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
