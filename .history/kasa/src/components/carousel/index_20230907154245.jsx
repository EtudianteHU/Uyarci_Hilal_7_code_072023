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
  display: flex;
  width: 100%;
  height: 100%;
  scroll-bahavior: smooth;
  scroll-snap-type: x mandatory;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
  border-radius: 25px;
`

const Arrows = styled.img`
position: absolute;
top: 50%;
transform: translateY(-50%)
z-index: 2;
cursor: pointer;
`

const ArrowLeft = styled(Arrows)`
  left: 20px;
`

const ArrowRight = styled(Arrows)`
  right: 20px;
`
const PictureLength = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: transflateX(-50%);
  color: ${colors.colorTertiary};
  font-size: 18px;
  font-weight: 500;
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

  const length = logement?.pictures.length || 0 // nombre de photos pour le logement actuel

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
