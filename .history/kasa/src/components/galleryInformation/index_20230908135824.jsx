import React from 'react'
import styled from 'styled-component'
import Tag from '../tag'
import Host from '../host'
import data from '../data'
import { useParams } from 'react-router-dom'

const WrapperContainer = styled.div`
  display: flex;
`
const Rating = styled.span`
  display: flex;
`
const Title = styled.div`
  display: flex;
`
const HostName = styled.div`
  display: flex;
`
const
const HostPicture = styled.div``
const Gallery = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { title } = logement
  const { location } = logement
  const { tags } = logement
  const { name, picture } = logement
  const { rating } = logement

  return (
    <WrapperContainer>
      <SectionLeft>
        <WrapperTitle>
          <Title>{title}</Title>
        </WrapperTitle>
        <Location>{location}</Location>
        <Tag>{tags}</Tag>
      </SectionLeft>
      <SectionRight>
        <Host>
          <HostName>{name}</HostName>
          <HostPicture src={picture} alt={name} />
        </Host>
        <Rating>{rating}</Rating>
      </SectionRight>
    </WrapperContainer>
  )
}
export default Gallery
