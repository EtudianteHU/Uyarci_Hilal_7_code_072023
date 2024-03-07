import React from 'react'
import styled from 'styled-components'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const HostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const HostName = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  order: 0;
`

const Stars = styled.div`
  /* Yıldızlar için stil */
  order: 1;
`

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin-left: 10px; // İsim ve resim arasında biraz boşluk olması için
`

const Host = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { host } = logement
  const { name, picture } = host

  return (
    <Container>
      <HostInfoContainer>
        <HostName>
          {name}
          <Image src={picture} alt={name} />
        </HostName>
      </HostInfoContainer>
    </Container>
  )
}

export default Host
