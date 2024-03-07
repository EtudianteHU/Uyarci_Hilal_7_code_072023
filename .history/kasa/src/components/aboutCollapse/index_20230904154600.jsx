import React, { useState } from 'react'
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

// const CollapseContent = styled.div`
//   background-color: ${colors.backgroundDark};
//   color: ${colors.primary};
// `

const AboutCollapse = () => {
 const [activeIndexes, setActiveIndexes] = useState([])

 const collapseContent = () => {
  setActiveIndexes((activeIndexes) => {
    const indexIsOpen = activeIndexes.includes(index)
    return indexIsOpen
    ? activeIndexes.filter((i) => i !== index)
    : [...activeIndexes, index]
  })

  const content = (title) => {
    switch (title) {
      case 'Fiable':
        return aboutData.fiable
        case 'Respect':
        return aboutData.respect
        case 'Service':
        return aboutData.service
        case 'Sécurité':
        return aboutData.sécurité
        default:
          return ''
    }
  }

  const collapseSection = ({ title, index}) => (
<>
<TextWrapper onClick={() => collapseContent(index)}>
{title}
<ArrowIcon src={activeIndexes.includes(index) ? UpArrow : DownArrow}
alt={
  activeIndexes.includes(index)
  ? 'Icône flèche du haut'
  : 'Icône flèche du bas'
}

/>
</TextWrapper>
{activeIndexes.includes(index) && (
  <CollapseContentWrapper

)}



</>


  )

return (
  <Section>
    <collapseSection title="Fiable" />
    <collapseSection title="Respect" />
    <collapseSection title="Service" />
    <collapseSection title="Sécurité" />
  </Section>
)
}

export default AboutCollapse
