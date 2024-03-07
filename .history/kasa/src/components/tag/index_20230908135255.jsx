import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import data from '../data'
import use

const WrapperTag = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 1rem;
`
const SpanTag = styled.div`
  background: ${colors.colorTertiary};
  padding: 0.3em 0.5em;
  border-radius: 0.7rem;
  text-align: center;
`
const Tag = () => {
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { tags } = logement
  return (
    <WrapperTag>
      <SpanTag>{tags}</SpanTag>
    </WrapperTag>
  )
}

export default Tag
