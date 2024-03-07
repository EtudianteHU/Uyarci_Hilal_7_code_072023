import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Carousel from '../carousel/index'
import GalleryInformation from '../../components/galleryInformation'
import Collapse from '../../'
import logements from '../data/logements.json'
import Error from '../../pages/error/index'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;
`

const Gallery = () => {
  const { galleryId } = useParams()
  //trouver le logement avec l'identifiant donné
  const logement = logements.find((logement) => logement.id === galleryId)

  // Si le logement n'existe pas, rediriger vers la page d'erreur
  if (!logement) {
    return <Error />
  }

  return (
    <Section>
      <Carousel />
      <GalleryInformation />
      {/* <Collapse /> */}
    </Section>
  )
}

export default Gallery
