import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ArrowIcon = styled.img`
  position: relative;
  width: 20px;
  height: 20px;
  object-fit: cover;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.colorTertiary};
  background: ${colors.primary};
  cursor: pointer;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`

const CollapseContentWrapper = styled.div`
  position: relative;
  margin-top: -10px;
  padding: 15px;
  z-index: -1;
  background-color: ${colors.backgroundLight};
  border-radius: 10px;
  flex: 1;
  min-height: 200px;
`

const TextContent = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-heihgt: 26px;
  color: ${colors.primary};
`

const CollapseWrapper = styled.div `
width: 45%;
display:flex;

`



const Collapse = ({ title, children }) => {
  const [activeIndexes, setActiveIndexes] = useState(false)

  return (
    <div>
      <TextWrapper onClick={() => setActiveIndexes(!activeIndexes)}>
        {title}
        <ArrowIcon
          src={activeIndexes ? UpArrow : DownArrow}
          alt="Icone du collapse"
        />
      </TextWrapper>
      {activeIndexes ? (
        <CollapseContentWrapper>{children}</CollapseContentWrapper>
      ) : null }  
      </div>

  )

}

const CollapseToggle = () => {
  
  const { galleryId } = useParams()
  const logement = data.find((product) => product.id === galleryId)

  const { description, equipments } = logement
  
  return (
    <Section>
      
    </Section>
  )
}

export default CollapseToggle
