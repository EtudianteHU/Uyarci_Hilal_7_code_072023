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

const RatingInformation = () => {











    return (
        <Rating>
            {/*Affichage de chaque etoile avec un alt différent selon la couleur */}
            <statusbar.map(( star, index ) => (
                <StarImage
                src={star}
                alt={index < rating ? 'Etoile rouge' : }
                ))

        </Rating>

    )
}

export default RatingInformation
