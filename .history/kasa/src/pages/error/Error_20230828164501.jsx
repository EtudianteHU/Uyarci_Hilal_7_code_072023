import React from 'react'


.error-page{
    color:$color.primary;
    h1{
        font-size:5rem;
        margin:0;
    }
    h2{
        font-size
    }
}
function Error() {
  return (
    <>
      <div className="error-page">
        <h1>404</h1>
        <h2>ooops!La page que vous demandez n'existe pas</h2>
      </div>
    </>
  )
}

export default Error
