import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
const Section = styled.div``

// Il semble que vous ayez voulu définir un composant stylisé pour les images, mais il manque l'implémentation
// Je vais le remplacer par une div simple pour l'instant, mais vous pouvez l'ajuster en fonction de vos besoins
const ImageBanner = styled.div`
  margin-bottom: 2rem;
  const ImageContainer =() =>{
  position: relative;
  width: 100%;
  height: 20rem;
 
    img{ 
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    object-fit: cover;
    box-shadow: rgb(149 157 165 /20%) 0px 8px 24px;
    opacity: 0;
    &.show '
    opacity:1;
  }}
`

const Carousel = (props) => {
  const pictures = props.pictures
  const [currentPicture, setCurrentPicture] = useState(0)
  const getClassName = (i) => {
    if (i === currentPicture) return 'show'
    return ''
  }
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.lenght)
  }
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.lenght - 1)
      return
    }

    setCurrentPicture(currentPicture - 1)
  }
  return (
    <Section>
      <ImageBanner>
        <ImageContainer>
          {pictures.map((pic, i) => (
            <img
              key={pic}
              src={pic}
              alt=""
              className={getClassName(i)} // Exemple de style, vous pouvez ajuster cela
            />
          ))}
        </ImageContainer>
      </ImageBanner>
      <button className="btn-next" onClick={moveToNext}>
        Next
      </button>
      <button onClick={moveToPrevious}>Previous</button>
    </Section>
  )
}

export default Carousel
