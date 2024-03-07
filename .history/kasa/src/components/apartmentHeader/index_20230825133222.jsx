import React from 'react'

function index() {
  return (
    <div> <div className="apartment-header">
    <ApartmentTitle className="apartment_title">
      <h1>Crazy loft on Canal Saint Martin</h1>
      <h2>Paris, Ile de France</h2>
      <span className="apartment_tag">Cozy</span>
      <span className="apartment_tag">Canal</span>
      <span className="apartment_tag">Paris 10</span>
    </ApartmentTitle>
    <ApartmentOwner className="apartment_owner_details">
      <h3>
        <span>Alexandre</span>
        <span> Dumas</span>
      </h3>
      <div className="apartment_owner_badge"></div>
      <div className="apartment_owner_stars">
        <div className="apartment_tags"></div>
        <span className="on">★</span>
        <span className="on">★</span>
        <span className="on">★</span>
        <span className="off">★</span>
        <span className="off">★</span>
      </div>
    </ApartmentOwner></div>
  )
}

export default index