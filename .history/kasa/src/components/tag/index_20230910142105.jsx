import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const WrapperTag = styled.div``


const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
font-weight: 500;
font-size: 14px;

`
const TagInformation = () => {

  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { tags } = logement

  return (
    <Tags>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}

    </Tags>
  )
}

export default TagInformation
