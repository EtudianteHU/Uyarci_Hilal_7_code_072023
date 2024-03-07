import React from 'react'
import styled from 'styled-components'

const ApartmentBannerContainer = styled.div`
  margin-bottom: 1rem;
`

const ApartmentBannerImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

function ApartmentBanner() {
  return (
    <ApartmentBannerContainer className="apartment_banner">
      <ApartmentBannerImage
        src="https://picsum.photos/id/1/800/400"
        alt="Apartment Banner"
      />
    </ApartmentBannerContainer>
  )
}

export default ApartmentBanner
