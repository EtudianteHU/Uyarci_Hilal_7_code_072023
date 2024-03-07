import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div``
const ImageBanner = styled.div``

const Carousel = (props) => {
  return (
    <Section>
      <ImageBanner pictures={props.pictures} />
      pictures.map((pic) => <img key=(pic)</img>)
    </Section>
  )
}
export default Carousel
