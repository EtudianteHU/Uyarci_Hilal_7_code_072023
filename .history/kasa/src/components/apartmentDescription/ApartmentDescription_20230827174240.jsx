import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const DescriptionWrapper = styled.div`
  .apartment_description {
    background-color: ${colors.Primary}
    COLOR
     p {
      margin-block: 0;
    }
    .description_header {
      background-color: ${colors.Primary};
      color: ${colors.colorTertiary};
      padding: 0.2em 1em;
      border-radius: 0.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 2rem;
      }
    }
    .description_content {
      background-color: ${colors.backgroundLight};
      color: ${colors.Primary};
      padding: 1rem;
      border-radius: 0 0 1rem 1rem;
      position: relative;
      top: -0.3rem;
      z-index: -1;
    }
  }
`

function ApartmentDescription() {
  return (
    <DescriptionWrapper>
      <div className="apartment_description">
        <p className="description_header">
          <span>Description</span>
          <i className="fas fa-chevron-down"></i>
        </p>
        <p className="description_content">Lorem ipsum etc</p>
      </div>
    </DescriptionWrapper>
  )
}

export default ApartmentDescription
