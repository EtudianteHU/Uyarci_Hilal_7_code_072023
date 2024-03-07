import React from 'react'
import styled from 'styled-components'

function Apartment() {
  return (
    <div className="apartment.page">
      <div>
        <img src="https://picsum.photos/id/1/800/400" alt="" />
      </div>
      <div className="apartment_title">
      <h1 "></h1>
      <h2 className="apartment.page_subtitle"></h2>
      <p>Cozy</p>
      <p>Canal</p>
      <p>Paris 10</p>
      <div className="apartment_owner">
        <h3>Alexandre Dumas</h3>
        <div className="apartment_owner_badge"></div>
        <div className="apartment_owner_stars"></div>
        <span>?</span>
        <span>?</span>
        <span>?</span>
        <span>?</span>
        <span>?</span>
      </div>
      <div className="apartment_description">
        <p>Description</p>
        <p>Lorem50</p>
      </div>
    </div>
  )
}

export default Apartment
