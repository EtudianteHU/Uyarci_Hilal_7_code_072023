import React from 'react'
import styled from 'styled-components'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const HostName = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  width: 75%;
  align-items: center;
  @media screen and (width<=768px) {
    order: 1;
  }
`

const Image = styled.img`
  flex-grow: 1;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
const Host = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { host } = logement
  const { name, picture } = host

  return (
    <Container
    <HostName>
      {name}
      <Image src={picture} alt={name} />
    </HostName>
    </Container
  )
}

export default Host
