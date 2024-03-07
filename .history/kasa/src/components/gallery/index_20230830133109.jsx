import React from "react"
import { styled } from "styled-components"
import { useParams } from "react-router-dom"
import Carousel from '../carousel'
import GalleryInformation from '../galleryInformation'
import Collapse from '../collapse'
import logements from '../data/logements.json'

const Gallery = () => {
const { galleryId } = useParams()

const logement = logements.find((logement) => logement.id === galleryId)

return(
    <Section>
    <Carousel

    </Section>
)

}

export default Gallery