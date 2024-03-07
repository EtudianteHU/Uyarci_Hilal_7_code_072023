import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const HostName = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  width: 75%;
  align-items: center;
  colors: ${colors.primary};
`

const WrapperBadge = styled.div`
  flex-grow: 1;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
const Host = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  if (!logement) {
    return <div>Logement not found</div>
  }

  const { name } = logement
  const { host } = logement

  return (
    <WrapperHost>
      <WrapperName>{name}</WrapperName>
      <WrapperBadge picture={host.picture} />
    </WrapperHost>
  )
}

export default Host
