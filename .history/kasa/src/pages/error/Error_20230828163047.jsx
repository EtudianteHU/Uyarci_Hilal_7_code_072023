import React from 'react'

const Main = v`
position: relative;
`
function Error() {
  return (
    <>
      <Main>
        <h1>404</h1>
        <h2>ooops!La page que vous demandez n'existe pas</h2>
      </Main>
    </>
  )
}

export default Error