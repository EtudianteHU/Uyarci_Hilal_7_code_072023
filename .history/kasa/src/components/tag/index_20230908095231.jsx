import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperTag = styled.div`
  display: flex;
  gap: 1rem;
`
const SpanTag = styled.div`
  background: ${colors.colorTertiary};
  padding: 0.3em 1em;
  border-radius
`
const Tag = () => {
  return (
    <WrapperTag>
      <SpanTag></SpanTag>
    </WrapperTag>
  )
}

export default Tag
