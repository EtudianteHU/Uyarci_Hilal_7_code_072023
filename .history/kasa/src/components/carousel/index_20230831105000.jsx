import React from 'react'
import styled from 'styled-components'

const Section = styled.div``

// Il semble que vous ayez voulu définir un composant stylisé pour les images, mais il manque l'implémentation
// Je vais le remplacer par une div simple pour l'instant, mais vous pouvez l'ajuster en fonction de vos besoins
const ImageBanner = styled.div`
margin-bottom:2rem;
position:relative;
img{
    widt
}
`

const Carousel = (props) => {
  return (
    <Section>
      {/* Utilisation du composant ImageBanner */}
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
