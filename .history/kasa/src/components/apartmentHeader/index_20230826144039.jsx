import React from 'react'
import styled from 'styled-components'

const ApartmentHeader = styled.div`
  display: flex;
`

const ApartmentTitle = styled.div`
  flex-grow: 1;
`

const ApartmentTags = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 1rem;
`

const Tag = styled.span`
  background-color: blue;
  color: red;
  padding: 0.5em 0.5em;
  border-radius: 0.7rem;
  text-align: center;
`

const ApartmentOwnerDetails = styled.div`
  display: flex;
  gap: 0.5rem;
`

const ApartmentOwnerBadge = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: aquamarine;
`

const ApartmentOwnerStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`

const Star = styled.span`
  font-size: 2rem;
  color: ${({ isOn }) => (isOn ? 'aqua' : 'yellow')};
`

const H3 = styled.h3`
  margin-block: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 400;
`

function Index() {
  return (
    <ApartmentHeader>
      <ApartmentTitle>
        <h1>Crazy loft on Canal Saint Martin</h1>
        <h2>Paris, Ile de France</h2>
        <ApartmentTags>
          <Tag>Cozy</Tag>
          <Tag>Canal</Tag>
          <Tag>Paris 10</Tag>
        </ApartmentTags>
      </ApartmentTitle>
      <ApartmentOwnerDetails>
        <H3>
          <span>Alexandre</span>
          <span> Dumas</span>
        </H3>
        <ApartmentOwnerBadge></ApartmentOwnerBadge>
        <ApartmentOwnerStars>
          <Star isOn>☆</Star>
          <Star isOn>☆</Star>
          <Star isOn>☆</Star>
          <Star>☆</Star>
          <Star>★</Star>
        </ApartmentOwnerStars>
      </ApartmentOwnerDetails>
    </ApartmentHeader>
  )
}

export default Index
