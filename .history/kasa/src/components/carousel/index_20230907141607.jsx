import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrowLeft from '../../assets/leftarrow.png'
import arrowRight from '../../assets/rightarrow.png'
import data from '../data/logements.json'
import { useParams } from 'react-router-dom'

const ContainerCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`

const ContentCarousel = styled.div`
display:flex;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 60px;
`

const Arrow = styled.img`
  position: absolute;
`

const ArrowLeft = styled(Arrow)`
  left: 20px;
  color: ${colors.colorTertiary};
`

const ArrowRight = styled(Arrow)`
  right: 20px;
`
const PictureLength = styled.div`
  font-size: 10px;
`

const Carousel = () => {
  const [current, setCurrent] = useState(0) //Index actuel de l'image affichée
  const [setScrollPosition] = useState(0) // position de défilement horizontal du carrousel

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft) //Mettre à jour la position de défilement
  }

  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) // Passer à l'image suivante
  }

  const { galleryId } = useParams()
  //trouver le logement avec l'identifiant donné
  const logement = data.find((product) => product.id === galleryId)

  const length = logement?.pictures?.length || 0 // nombre de photos pour le logement actuel

  return (
    <ContainerCarousel>
      {/*Afficher le bouton fléché vers la gauche uniquement lorsqu'il y a plus d'une image*/}
      {length > 1 && (
        <ArrowLeft
          src={arrowLeft}
          alt="Flèche de gauche"
          onClick={handleRightArrowClick}
        />
      )}

      {/*Conteneur de contenu du carrousel*/}
      <ContentCarousel id="carousel" onScroll={handleScroll}>
        {/*Cartographier les images et afficher uniquement l'image qui correspond à l'index actuel*/}
        {logement.pictures.map(
          (picture, index) =>
            index === current && (
              <CarouselImage
                key={picture}
                src={picture}
                alt="Photo du logement"
              />
            )
        )}
      </ContentCarousel>

      {/*Afficher le bouton fléché vers la droite uniquement lorsqu'il y a plus d'une image*/}
      {length > 1 && (
        <ArrowRight
          src={arrowRight}
          alt="Flèche de droite"
          onClick={handleRightArrowClick}
        />
      )}

      {/*Afficher le compteur d'image*/}
      <PictureLength>
        {current + 1}/{length}
      </PictureLength>
    </ContainerCarousel>
  )
}

export default Carousel
