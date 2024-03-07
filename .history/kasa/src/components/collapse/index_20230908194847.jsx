import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'
import logements from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
  color: white;
  background: ${colors.primary};
  cursor: pointer;
  border-radius: 5px 5px 0 0;
  padding: 10px;
  margin-bottom: 20px;
`

const CollapseContentWrapper = styled.div`
  position: relative;
  top: -10px;
  width: 100%;
  z-index: -1;
  background: ${colors.backgroundLight};
  margin-bottom: 25px;
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${colors.primary};
  margin: 30px 20px;
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const Collapse = () => {
  const [activeIndexes, setActiveIndexes] = useState([])
  const { galleryId } = useParams()
  const logement = logements.find((product) => product.id === galleryId)
  const { description } = logement
  const collapseContent = (index) => {
    setActiveIndexes((activeIndexes) => {
      const indexIsOpen = activeIndexes.includes(index)
      return indexIsOpen
        ? activeIndexes.filter((i) => i !== index)
        : [...activeIndexes, index]
    })
  }

  const content = (title) => {
    switch (title) {
      case 'Description':
        return logements.description
      case 'Equipements':
        return logements.equipements

      default:
        return ''
    }
  }

  const CollapseSection = ({ title, index }) => (
    <>
      <TextWrapper onClick={() => collapseContent(index)}>
        {title}
        <ArrowIcon
          src={activeIndexes.includes(index) ? UpArrow : DownArrow}
          alt={
            activeIndexes.includes(index)
              ? 'Icône flèche du haut'
              : 'Icône flèche du bas'
          }
        />
      </TextWrapper>
      {activeIndexes.includes(index) && (
        <CollapseContentWrapper>
          <TextContent>{content}</TextContent>
        </CollapseContentWrapper>
      )}
    </>
  )

  return (
    <Section>
      <CollapseSection title="Fiable" index={0} />
      <CollapseSection title="Respect" index={1} />
      <CollapseSection title="Service" index={2} />
      <CollapseSection title="Securité" index={3} />
    </Section>
  )
}

export default Collapse
