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