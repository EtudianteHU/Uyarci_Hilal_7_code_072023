import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const WrapperTag = styled.div`
  display: flex;
  gap: 1rem;
`
const SpanTag = styled.div`
  background: ${colors.colorTertiary};
  padding: 0.5em 1em;
`
const Tag = () => {
  return (
    <WrapperTag>
      <SpanTag></SpanTag>
    </WrapperTag>
  )
}
