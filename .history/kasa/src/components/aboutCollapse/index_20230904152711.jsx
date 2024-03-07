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
 const [activeIndexes, setActiveIndexes]



return(
  <Section>
    <CollapseContent title="Fiable" />
    <CollapseContent title="Respect" />
    <CollapseContent title="Service" />
    <CollapseContent title="Sécurité" />
  </Section>
)

export default AboutCollapse
