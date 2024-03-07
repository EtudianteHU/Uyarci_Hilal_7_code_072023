import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorPage = styled.div`
  color: ${colors.primary};
  texxt-aligne: center;
  h1 {
    font-size: 10rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2px;
    font-weight: 400;
  }
`

function Error() {
  return (
    <ErrorPage>
      <h1>404</h1>
      <h2>ooops! La page que vous demandez n'existe pas</h2>
    </ErrorPage>
  )
}

export default Error
