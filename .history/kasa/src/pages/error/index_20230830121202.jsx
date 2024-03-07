import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div `
margin: 5vw;
display:

` 


function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>404</ErrorText>
      <ErrorSubtitle>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorBackToHome href="/">
        Retourner sur la page d'accueil
      </ErrorBackToHome>
    </ErrorWrapper>
  )
}

export default Error
