import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperTag = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 1rem;
`
const SpanTag = styled.div`
  background: ${colors.colorTertiary};
  padding: 0.3em 1em;
  border-radius: 0.7rem;
  
`
const Tag = () => {
  return (
    <WrapperTag>
      <SpanTag></SpanTag>
    </WrapperTag>
  )
}

export default Tag
