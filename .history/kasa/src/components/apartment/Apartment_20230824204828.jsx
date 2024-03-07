import React from 'react'
import styled from 'styled-components'

// Définition des styles avec styled-components
const ApartmentWrapper = styled.div`
  color: $color-primary;
  h1 {
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

const ImageContainer = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const ApartmentTitle = styled.div``

const ApartmentOwner = styled.div``

const ApartmentDescription = styled.div`
  /* Styles pour la description de l'appartement */
`

function Apartment() {
  return (
    <ApartmentWrapper className="apartment.page">
      <ImageContainer>
        <img src="https://picsum.photos/id/1/800/400" alt="" />
      </ImageContainer>
      <div className="apartment-header">
      <ApartmentTitle className="apartment_title">
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <span className="apartment_tag">Cozy</span>
        <span className="apartment_tag">Canal</span>
        <span className="apartment_tag">Paris 10</span>
      </ApartmentTitle>
      <ApartmentOwner className="apartment_owner_details">
        <h3>
          <span>Alexandre</span>
            <span> Dumas</span></h3>
        <div className="apartment_owner_badge"></div>
        <div className="apartment_owner_stars">
          <div className="apartment_tags"></div>
          <span className="on">★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </ApartmentOwner>
      <ApartmentDescription className="apartment_description">
        <p>Description</p>
        <p>Lorem50</p>
      </ApartmentDescription>
    </ApartmentWrapper>
  )
}

export default Apartment
