import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


function Error() {
  return (
   <ErrorWrapper>
    <ErrorText>404</ErrorText>
    <ErrorSubtitle>Oups ! La page que vous demandez n'existe pas.</ErrorSubtitle>
    <ErrorBackToHome href="/">Retourner</ErrorBackToHome>

   </ErrorWrapper>


  )
}

export default Error