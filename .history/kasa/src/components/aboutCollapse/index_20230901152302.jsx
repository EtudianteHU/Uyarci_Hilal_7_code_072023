import React from 'react'
import colors from '../../utils/style/colors'
import { styled } from 'styled-components'
const CollapseWrapper = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
`

const CollapseHeader = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:1rem
`
const CollapseContent = styled.div`
background-color:{color.primary}
color:${colors.colorTertiary}
padding-block:0.7rem
`
const AboutCollapse = () => {
  return (
    <CollapseWrapper>
      <CollapseHeader>
        <CollapseContent></CollapseContent>
      </CollapseHeader>
    </CollapseWrapper>
  )
}

export default AboutCollapse
