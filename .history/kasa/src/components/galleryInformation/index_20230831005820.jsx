import React from 'react'
import styled from 'styled-components'

const Logement = styled.div`
  border-radius: 1rem;
  flex-basis: 30%;
  background-image: linear-gradient(to top, #863535, #ff6060);
`

const Titre = styled.div`
  width: 50%;
  margin-inline-start: 0.5rem;
`

const GalleryInformation = () => {
  return (
    <div>
      <Logement/>
        <Titre>Titre de la location</Titre>
    
      <Logement>
        <Titre>Titre de la location</Titre>
      </Logement>
      <Logement>
        <Titre>Titre de la location</Titre>
      </Logement>
      <Logement>
        <Titre>Titre de la location</Titre>
      </Logement>
    </div>
  )
}
export default GalleryInformation
