import React from 'react'
import Apartment from './../../pages/Logement/Logement'

const Logement = () => {
  return (
    <div className="apartment.page">
    <div>
      <img src="https://picsum.photos/id/1/800/400" alt="" />
    </div>
    <div className="apartment_title"></div>
    <div className="apartment_owner">
      <h3>Alexandre Dumas</h3>
      <div className="apartment_owner_badge"></div>
      <div className="apartment_owner_stars"></div>
      <span> </span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="apartment_description">
      <p>Description</p>
      <p>Lorem 50</p>
    </div>
  </div>
  )
}

export default Logement