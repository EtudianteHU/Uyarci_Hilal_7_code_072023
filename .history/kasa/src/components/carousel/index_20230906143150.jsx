import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import vectorLeft from '../../assets/leftarrow.png'
import vectorRight from '../../assets/rightarrow.png'

const Section = styled.div``

const ImageBanner = styled.div`
  margin-bottom: 2rem;
  position: relative;

  .btn {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 5rem;
    background-color: transparent;
    color: ${colors.colorTertiary};
    font-size: 3rem;
    border-width: 0px;
    &:active,
    &:focus {
      outline: none;
    }
    &.btn-next {
      right: 0;
    }
    &.btn-previous {
      right: 0;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`
const ImageCarousel = styled.div``
const ImageCarousel1 = styled.div``

const Carousel = () => {

  const [current, setCurrent] = useState(0) //Index actuel de l'image affichée
  const [setScrollPosition] = useState(0) // position de défilement horizontal du carrousel

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft) //Mettre à jour la position de défilement
  }

  const handleRightArrowClick = () => {
    setCurrent(current === length - 1 ?  0 : current + 1) // Passer à l'image suivante
    
  }

  const { galleryId } = useParams()
  //trouver le logement avec l'identifiant donné
  const logement = data.find((product) => product.id === galleryId)

  const length = logement?.pictures?.length || 0 // nombre de photos pour le logement actuel

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }
return (
    <ContainerCarousel>
      {/*Afficher le bouton fléché vers la gauche uniquement lorsqu'il y a plus*/}


    </ContainerCarousel>
  )
}

export default Carousel
