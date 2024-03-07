import React from 'react'
import styled from 'styled-components'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const HostInfo = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligner les éléments à droite */
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column; /* Pour empiler les éléments verticalement sur mobile */
    align-items: flex-end; /* Aligner les éléments à droite sur mobile */
    text-align: right; /* Aligner le texte à droite sur mobile */
  }
`

const HostName = styled.h2`
  font-weight: 500;
  font-size: 18px;
  width: 75%;
  margin-left: 10px; /* Marge entre l'image et le nom */
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
      <Image src={picture} alt={name} />
      <HostName>{name}</HostName>
    </HostInfo>
  )
}

export default Host
