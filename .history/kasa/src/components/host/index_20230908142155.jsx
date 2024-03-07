import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import data from '../../components/data/logements.json'

const WrapperHost = styled.div`
  display: flex;
`
const WrapperName = styled.div`
  margin-block: 0;
  display: grid;
  place-items: center;
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

  const { name, picture } = logement
  return (
    <WrapperHost>
      <WrapperName>{name} </WrapperName>
      <WrapperBadge>{picture}</WrapperBadge>
    </WrapperHost>
  )
}
export default Host
