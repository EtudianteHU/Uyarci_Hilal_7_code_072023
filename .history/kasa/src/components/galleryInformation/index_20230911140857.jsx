import React from 'react'
import styled from 'styled-components'
import TagInformation from '../tag/index'
import HostInformation from '../host/index'
import RatingInformation from '../rating/index'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'
import colors from '../../utils/style/colors'

const WrapperContainer = styled.div`
  display: flex;
  padding: 0 20px;
`

const Title = styled.h1`
  display: flex;
  font-size: 20px;
  color: ${colors.primary};
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0;
`

const SectionLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const SectionRight = styled.div`
  display: flex;
`
const Location = styled.h2`
  fony-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.primary};
  margin-bottom: 0.2em;
`

const WrapperTitle = styled.div`
  display: flex;
`

const Gallery = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { title } = logement
  const { location } = logement

  return (
    <WrapperContainer>
      <SectionLeft>
        <WrapperTitle>
          <Title>{title}</Title>
        </WrapperTitle>
        <Location>{location}</Location>
        <TagInformation />
      </SectionLeft>
      <SectionRight>
        <HostInformation />
        <RatingInformation />
      </SectionRight>
    </WrapperContainer>
  )
}

export default Gallery
