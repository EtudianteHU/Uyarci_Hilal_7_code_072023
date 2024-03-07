import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ApartmentHeader = styled.div`
  display: flex;
`

const ApartmentTitle = styled.div`
  flex-grow: 1;
`

const ApartmentTags = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 1rem;
`

const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  padding: 0.5em 0.5em;
  border-radius: 0.7rem;
  text-align: center;
`
