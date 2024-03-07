import React from 'react'
import colors from '../../utils/style/colors'
import { styled } from 'styled-components'
import aproposData from '.'
const CollapseWrapper = styled.div`
  margin-block: 0;
`

const CollapseHeader = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:0.7rem;
border-radius:0.7rem;

`
const CollapseContent = styled.div`
background-color:{color.backgroundDark}
color:${colors.primary}

`
const AboutCollapse = () => {
  return (
    <CollapseWrapper>
      {Object.keys(aproposData).map((key) => (
        <React.Fragment key={key}>
          <CollapseHeader>{key}</CollapseHeader>
          <CollapseContent>{aproposData[key]}</CollapseContent>
        </React.Fragment>
      ))}
    </CollapseWrapper>
  )
}

export default AboutCollapse
