import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ApartmentHeader = styled.div`
  display: flex;
`

const ApartmentTitle = styled.div`
  flex-grow: 1;
`

const ApartmentTags = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  gap: 1rem;
`

const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
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
  background-color: ${colors.backgroundDark};
`

const ApartmentOwnerStars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`

const Star = styled.span`
  font-size: 2rem;
  color: ${({ isOn }) => (isOn ? colors.primary : colors.backgroundDark)};
`

const H3 = styled.h3`
  margin-block-start: 0;
  margin-block-end: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 400;
`

const ownerStars = [true, true, true, false, false]

const ApartmentBadgeH = styled.div`

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
        <ApartmentBadgeH>
          <H3>
            <span>Alexandre</span>
            <span> Dumas</span>
          </H3>
          <ApartmentOwnerBadge />
        </ApartmentBadgeH>
        <ApartmentOwnerStars>
          {ownerStars.map((isOn, index) => (
            <Star key={index} isOn={isOn}>
              ★
            </Star>
          ))}
        </ApartmentOwnerStars>
      </ApartmentOwnerDetails>
    </ApartmentHeader>
  )
}

export default Index
