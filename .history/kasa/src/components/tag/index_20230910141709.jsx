import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const WrapperTag = styled.div``


const SpanTag = styled.span`
  background: ${colors.primary};
  padding: 0.3em 0.5em;
  border-radius: 0.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 2rem;
`
const TagInformation = () => {

  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { tags } = logement

  return (
    <Tags>

      
    </Tags>
  )
}

export default TagInformation
