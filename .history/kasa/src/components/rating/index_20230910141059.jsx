import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import data from '../data/logements.json'
import redStar from '../../assets/redStar.png'
import grayStar from '../../assets/grayStar.png'


const Rating = styled.div `
    align-self: flex-end;
    font-weight: bold;  

`

const Rate = styled.div`
display: flex;
align-items: center;

`

const StarImage = styled.img `
margin-right: 5px;

`


const RatingInformation = () => {

    const { galleryId } = useParams()
    const logement = data.find((product) => product.id === galleryId)
  
    const { rating } = logement
    
    const 









    return (
        <Rating>
            <Rate>
            {/*Affichage de chaque etoile avec un alt différent selon la couleur */}
            {stars.map((star, index) => (
                <StarImage
                src={star}
                alt={index < rating ? 'Etoile rouge' : 'Etoile grise'}
                key={index}
                />
                ))}
            </Rate>
        </Rating>

    )
}

export default RatingInformation
