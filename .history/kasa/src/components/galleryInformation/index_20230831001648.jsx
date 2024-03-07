import React from 'react'
import styled from 'styled-components'

const Section = styled.div``
const Thumb = styled.div`
  border-radius: 1rem;
  flex-basis: 30%;
`

const Titre = styled.div`
  width: 50%;
  margin-inline-start: 0.5rem;
  background-image:linear-gradient(to top,#86
`

const GalleryInformation = () => {
  return (
    <Section>
      <Thumb>
        <Titre>Titre de la location</Titre>
      </Thumb>
      <Thumb>
        <Titre>Titre de la location</Titre>
      </Thumb>
      <Thumb>
        <Titre>Titre de la location</Titre>
      </Thumb>
      <Thumb>
        <Titre>Titre de la location</Titre>
      </Thumb>
    </Section>
  )
}
export default GalleryInformation
