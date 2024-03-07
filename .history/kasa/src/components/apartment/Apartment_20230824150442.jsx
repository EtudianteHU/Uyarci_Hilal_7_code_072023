import React from 'react'
import styled from 'styled-components'

const StyledApartment = styled.div`
  background-image: linear-gradient(to top, #863535, #ff6060);
  border-radius: 1rem;
  justify-content: space-between;
  flex-basis: 30%;
  display: grid;
  align-items: end;
  min-width: 200px;
  min-height: 300px;

  .apartment_subtitle {
    width: 50%;
    margin-inline-start: 0.5rem;
    margin-block-end: 0.5rem;
    color: white;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;

    .apartment_subtitle {
      width: 100%;
      margin-inline-start: 0.5rem;
      margin-block-end: 0.5rem;
      color: white;
    }
  }
`
function Apartment() {
  return (<div className='apartment'
    <StyledApartment>
      <div>
        <img src="https://picsum.photos/id/1/800/400" alt="" />
      </div>
    </StyledApartment>
  )
}

export default Apartment
