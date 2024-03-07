import React from 'react'
import styled from 'styled-components'

const Section = styled.div``

// Il semble que vous ayez voulu définir un composant stylisé pour les images, mais il manque l'implémentation
// Je vais le remplacer par une div simple pour l'instant, mais vous pouvez l'ajuster en fonction de vos besoins
const ImageBanner = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  height: 20rem;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: cover;
    box-shadow: rgb(149 157 165 /20%) 0px 8px 24px;
    opacity: 0;
    .show &'
    opacity:1;
  }
`

const Carousel = (props) => {
    const pictures=props.pictures;
    const (current)
  return (
    <Section>
      
      <ImageBanner>
        {props.pictures.map((pic) => (
          <img
            key={pic}
            src={pic}
            alt=""
            style={{ marginRight: '10px' }} // Exemple de style, vous pouvez ajuster cela
          />
        ))}
      </ImageBanner>
    </Section>
  )
}

export default Carousel
