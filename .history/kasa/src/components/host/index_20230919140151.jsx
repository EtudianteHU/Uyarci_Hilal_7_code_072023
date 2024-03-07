import React from 'react'
import styled from 'styled-components'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

const HostName = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-right: 10px; /* Marge entre le nom et l'image */
`

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 10px; /* Marge entre l'image et le nom sur mobile */
  }
`

const Host = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { host } = logement
  const { name, picture } = host

  return (
    <HostInfo>
      <HostName>{name}</HostName>
      <Image src={picture} alt={name} />
    </HostInfo>
  )
}

export default Host
