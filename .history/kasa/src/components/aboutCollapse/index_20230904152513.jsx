import React from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import aboutData from '../data/aproposData'

const CollapseWrapper = styled.div`
  margin-block: 0;
`

const CollapseHeader = styled.div`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  padding-block: 0.7rem;
  border-radius: 0.7rem;
`

const CollapseContent = styled.div`
  background-color: ${colors.backgroundDark};
  color: ${colors.primary};
`

const AboutCollapse = () => {
  const aproposEntries = Object.entries(aboutData)

  return (
    <CollapseWrapper>
      {aproposEntries.map(([key, value]) => (
        <React.Fragment key={key}>
          <CollapseHeader>{key}</CollapseHeader>
          <CollapseContent>{value}</CollapseContent>
        </React.Fragment>
      ))}
    </CollapseWrapper>
  )
}



return(
  <Section>
    <CollapseContent title="Fiable" />
    <CollapseContent title="Fiable"/>
    <CollapseContent title="Fiable" />
    <CollapseContent title="Fiable"/>
  </Section>
)

export default AboutCollapse
