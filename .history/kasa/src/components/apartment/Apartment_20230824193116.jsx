import React from 'react'
import styled from 'styled-components'

// Définition des styles avec styled-components
const ApartmentWrapper = styled.div`
  color: $color-primary;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ApartmentTitle = styled.div`
  h1 {
    font-weight: 400;
    margin-top
  }
`

const ApartmentOwner = styled.div`
  /* Styles pour le propriétaire de l'appartement */
`

const ApartmentDescription = styled.div`
  /* Styles pour la description de l'appartement */
`

function Apartment() {
  return (
    <ApartmentWrapper className="apartment.page">
      <ImageContainer>
        <img src="https://picsum.photos/id/1/800/400" alt="" />
      </ImageContainer>
      <ApartmentTitle className="apartment_title">
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <p>Cozy</p>
        <p>Canal</p>
        <p>Paris 10</p>
      </ApartmentTitle>
      <ApartmentOwner className="apartment_owner">
        <h3>Alexandre Dumas</h3>
        <div className="apartment_owner_badge"></div>
        <div className="apartment_owner_stars"></div>
        <span>?</span>
        <span>?</span>
        <span>?</span>
        <span>?</span>
        <span>?</span>
      </ApartmentOwner>
      <ApartmentDescription className="apartment_description">
        <p>Description</p>
        <p>Lorem50</p>
      </ApartmentDescription>
    </ApartmentWrapper>
  )
}

export default Apartment
