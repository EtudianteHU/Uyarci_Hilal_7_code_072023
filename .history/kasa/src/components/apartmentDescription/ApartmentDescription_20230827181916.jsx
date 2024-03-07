import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesomeIcon
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import colors from '../../utils/style/colors';

const DescriptionWrapper = styled.div`
  .apartment_description {
    p {
      margin: 0; /* Use 'margin' instead of 'margin-block' */
    }
  }
`;

const DescriptionHeader = styled.div` /* Change to 'div' here */
  background-color: ${colors.primary};
  color: ${colors.colorTertiary};
  padding: 0.2em 1em;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionContent = styled.div` /* Change to 'div' here */
  background-color: ${colors.backgroundLight};
  color: ${colors.primary};
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  top: -0.3rem;
  z-index: -1;
`;

// Correct the way of using FontAwesomeIcon
const IconWrapper = styled.div`
  width: 20px; /* Adjust the width as needed */
`;

const ApartmentDescription = () => {
  return (
    <DescriptionWrapper>
      <div className="apartment_description">
        <DescriptionHeader>
          <span>Description</span>
          <IconWrapper>
            <FontAwesomeIcon icon={faChevronDown} />
          </IconWrapper>
        </DescriptionHeader>
        <DescriptionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          incidunt iusto cumque amet vel ipsa, distinctio soluta, blanditiis
          consectetur adipisci saepe eaque ullam id vitae autem. Illo,
          temporibus facilis culpa quis dignissimos repellat ipsa quod modi
          pariatur labore voluptas eos recusandae, error doloremque obcaecati
          placeat itaque exercitationem minima vero veritatis.
        </DescriptionContent>
      </div>
    </DescriptionWrapper>
  );
}

export default ApartmentDescription;