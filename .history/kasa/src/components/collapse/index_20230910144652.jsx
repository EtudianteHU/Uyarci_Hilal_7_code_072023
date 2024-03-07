import React, { useState } from 'react'
import colors from '../../utils/style/colors'
import styled from 'styled-components'
import UpArrow from '../../assets/uparrow.png'
import DownArrow from '../../assets/downarrow.png'
import data from '../../components/data/logements.json'
import { useParams } from 'react-router-dom'

const Section = styled.div`
  display: flex;
  width: 50%;
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
