import React from 'react'

.apartment-header {
    display: flex;
  }
  .apartment_title {
    flex-grow: 1;
  }
  .apartment_owner_details {
    display: flex;
    gap: 0.5rem;
  }
  .apartment_owner_badge {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .apartment_owner_stars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    * {
      font-size: 2rem;
    }
    .on {
      color: aqua;
    }
    .off {
      color: yellow;
    }
  }

  h3 {
    margin-block: 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    font-weight: 400;
  }
}
&.apartment_tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 1rem;
  span {
    background-color: bleu;
    color: red;
    padding: 0.5em 0.5em;
    border-radius: 0.7rem;
    text-align: center;
  }
}
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