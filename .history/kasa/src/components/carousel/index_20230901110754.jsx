import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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
      <button className="btn btn-next" onClick={moveToNext}>
  <img src="vectorImage" alt="Next" />
</button>
<button className="btn btn-previous" onClick={moveToPrevious}>
  <img src="vectorImage1" alt="Previous" />
</button>
    </Section>
  )
}

export default Carousel
