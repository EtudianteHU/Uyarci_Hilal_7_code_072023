import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div``
const ImageBanner = styled.div``

const Carousel = (props) => {
  return (
    <Section>
      <ImageBanner imageArray={.pictures} />
    </Section>
  )
}
export default Carousel
