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
  align-items: center;
  justify-content: space-between; /* Align items to the start and end */
  gap: 0.5rem;
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the end (right) */
`;

const OwnerName = styled.span`
  text-align: right; /* Align the name to the right */
  font-weight: 500; /* Add a bit of boldness */
`;

const StarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align items to the end (right) */
  gap: 0.2rem;
`;

function Index() {
  return (
    <ApartmentHeader>
      <ApartmentTitle>
        {/* ... (Apartment title and tags) ... */}
      </ApartmentTitle>
      <ApartmentOwnerDetails>
        <StarWrapper>
          {ownerStars.map((isOn, index) => (
            <Star key={index} isOn={isOn}>
              ★
            </Star>
          ))}
        </StarWrapper>
        <OwnerInfo>
          <OwnerName>Alexandre Dumas</OwnerName>
          <ApartmentOwnerBadge />
        </OwnerInfo>
      </ApartmentOwnerDetails>
    </ApartmentHeader>
  );
}