import React from 'react'
import { styled } from 'styled-components'
import {NLink} frpm ''
const Main = styled.main``
function Error() {
  return (
    <>
      <Main>
        <h1>404</h1>
        <h2>ooops!La page que vous demandez n'existe pas</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </Main>
    </>
  )
}

export default Error
