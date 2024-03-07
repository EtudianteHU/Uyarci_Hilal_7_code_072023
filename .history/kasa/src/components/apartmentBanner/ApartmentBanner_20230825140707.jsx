import React from 'react'

function ApartmentBanner() {
  const apartmentBannerStyle = {
    margin
    img: {
      width: '100%',
      height: '20rem',
      objectFit: 'cover',
      borderRadius: '1rem',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
  }

  return (
    <div className="apartment_banner">
      <img
        src="https://picsum.photos/id/1/800/400"
        alt="Apartment Banner"
        style={apartmentBannerStyle.img}
      />
    </div>
  )
}

export default ApartmentBanner
