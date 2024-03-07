import React from 'react'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifyc-content: center;
`

const BannerImage = styled.img`

`

const BannerText = styled.h1`
font-weight:
font-size:
text-align:
color: ${colors.}
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
