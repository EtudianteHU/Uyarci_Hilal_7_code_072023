import React from 'react'
import { Styled } from 'styled-components'
function ApartmentBanner() {
  const imageStyle = {
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
    borderRadius: '1rem',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  }

  return (
    <div className="apartment">
      <img src="https://picsum.photos/id/1/800/400" style={imageStyle} />
    </div>
  )
}
