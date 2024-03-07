import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const DescriptionWrapper = styled.div`
  .apartment_description {
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

import React from 'react'
import styled from 'styled-components'

const DescriptionWrapper = styled.div`
  /* ... your styles ... */
`

const ApartmentDescription = () => {
  return (
    <DescriptionWrapper>
      <div>
        <DescriptionHeader>
          <span>Description</span>
          <i className="fas fa-chevron-down"></i>
        </DescriptionHeader>
        <DescriptionContent>Lorem ipsum etc</DescriptionContent>
      </div>
    </DescriptionWrapper>
  )
}

const DescriptionHeader = styled.p`
  /* ... your header styles ... */
`

const DescriptionContent = styled.p`
background-color: ${colors.backgroundLight};
color: ${colors.Primary};
padding: 1rem;
border-radius: 0 0 1rem 1rem;
position: relative;
top: -0.3rem;
z-index: -1;
`

export default ApartmentDescription
