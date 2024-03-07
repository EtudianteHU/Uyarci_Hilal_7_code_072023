import React from 'react'
import styled from 'styled-component'

const { galleryId } = useParams()
const logement = data.find((product) => product.id === galleryId)

const { title } = logement
const { location } = logement
const { tags } = logement
const { name, picture } = logement
const { rating } = logement
const Gallery = () => {
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
