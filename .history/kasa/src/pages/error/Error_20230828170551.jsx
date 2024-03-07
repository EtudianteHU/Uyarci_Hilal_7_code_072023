import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorPage = styled.div`
  color: ${colors.primary};
  text-align: center;
  h1 {
    font-size: 10rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 28px;
    font-weight: 400;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

function Error() {
  return (
    <ErrorPage>
      <h1>404</h1>
      <h2>
        ooops! La page que vous demandez n'existe pas <Link to="/">Retournez a la page d'accueil</Link>.
      </h2>
    </ErrorPage>
  )
}

export default Error
