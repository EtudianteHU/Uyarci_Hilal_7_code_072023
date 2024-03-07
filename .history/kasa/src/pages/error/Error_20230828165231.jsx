import React from 'react'
import styled from 'styled-components'
import colors from 
const ErrorPage = styled.div`
  color: ${colors.primary} 
  h1 {
    font-size: 5rem;
    margin: 0;
  }

  h2 {
    font-size: 3rem;
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
