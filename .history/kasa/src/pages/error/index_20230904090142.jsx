import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
const ErrorWrapper = styled.div`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;

  @media (max-with: 768px) {
    bottom: -4rem;
  }
`
const ErrorText = styled.h1`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  font-size: 288px;
  color: ${colors.primary};
  @media screen and (max-with: 768px) {
    font-size: 96px;
  }
`
const ErrorSubtitle = styled.h2`
  margin: 5vw;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  font-size: 36px;
  @media (max-with: 768px) {
    bottom: -4rem;
    font-size: 18px;
  }
`

const ErrorBackToHome = styled.a`
  margin: 5vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  bottom: -2rem;
  color: ${colors.primary};
  font-size: 18px;
  flex-direction: column;
  @media (max-with: 768px) {
    bottom: -4rem;
    font-size: 14px;
  }
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
