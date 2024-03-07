import React, { useState } from 'react'
import styled from 'styled-components'

const Section = styled.div``

const ImageBanner = styled.div`
  margin-bottom: 2rem;
  position: relative;

  .btn-next {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 5rem;
    background-color: transparent;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`

const Carousel = (props) => {
  const pictures = props.pictures
  const [currentPicture, setCurrentPicture] = useState(0)

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(newCurrentPicture)
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
              className={i === currentPicture ? 'show' : ''}
            />
          ))}
        </ImageContainer>
      </ImageBanner>
      <button className="btn-next" onClick={moveToNext}>
        <img src="../../assets/Vector.png" alt="Next" />
      </button>
      <button className="btn-previous" onClick={moveToPrevious}>
       
      </button>
    </Section>
  )
}

export default Carousel
