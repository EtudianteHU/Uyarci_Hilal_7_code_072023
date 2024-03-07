import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const DescriptionWrapper = styled.div`
  .apartment_description {
    p {
      margin-block: 0;
    }
  }
`

const DescriptionHeader = styled.p`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  padding: 0.2em 1em;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DescriptionContent = styled.p`
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  top: -0.3rem;
  z-index: -1;
`

const ApartmentDescription = () => {
  return (
    <DescriptionWrapper>
      <div className="apartment_description">
        <DescriptionHeader>
          <span>Description</span>
          <i className="fas fa-chevron-down"></i>
        </DescriptionHeader>
        <DescriptionContent>Lorem ipsum etc</DescriptionContent>
      </div>
    </DescriptionWrapper>
  )
}

export default ApartmentDescription
