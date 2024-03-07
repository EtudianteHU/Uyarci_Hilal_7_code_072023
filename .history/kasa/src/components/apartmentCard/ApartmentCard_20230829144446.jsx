import React from 'react'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const StyledApartment = styled(Link)`
  background-image: linear-gradient(to top, #863535, #ff6060);
  border-radius: 1rem;
  flex-basis: 30%;
  justify-conte
  display: grid;
  align-items: end;
  min-width: 200px;
  min-height: 300px;
  position:relative;
  filter: brightness(0.8);

  .apartment_subtitle {
    width: 50%;
    margin-inline-start: 0.5rem;
    margin-block-end: 0.5rem;
    color: ${colors.colorTertiary};
    position:absolute;

  }
img{
    width:100%;
    height:100%;
    object-fit:cover;
    box-shadow:rgb(149 157 165 /20%) 0px 8px 24px;
}
  @media screen and (max-width: 768px) {
    flex-basis: 100%;

    .apartment_subtitle {
      width: 100%;
      margin-inline-start: 0.5rem;
      margin-block-end: 0.5rem;
      color: ${colors.colorTertiary};
    }
  }
`
function ApartmentCard(props) {
  return (
   <Link to="/Apartment">
    <div className='="apartment">
   <img src={props.imageUrl} alt=""/> 
    <div className="apartment_subtitle">{props.title}</div>
    </div>
    </Link>
  )
}

export default ApartmentCard
