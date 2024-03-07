import React from 'react'
import styled from 'styled-components'

const Section = styled.div``
const Thumb = styled.div`
  border-radius: 2rem;
  flex-basis: 30%;
`

const Titre = styled.div`
  width: 50%;
`

const GalleryInformation = () => {
  return (
    <Section>
      <Thumb />
      <Titre>Titre de la location</Titre>
    </Section>
  )
}
export default GalleryInformation
