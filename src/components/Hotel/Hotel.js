import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import './Hotel.css';

const Hotel = (props) => {

  const { name, img, price, address, internet, star } = props.hotel || {}
  const element = <FontAwesomeIcon icon={faShoppingBasket} />

  return (
    <div className="col-md-4 ">
      <div class="card mb-3 bg-transparent shadow p-3 mb-5 bg-body rounded" style={{ "max-width": "540px" }}>
        <div class="row g-0">




          <div class="card-body ms-3 ">
            <img src={img} className="img-fluid rounded-circle img" alt="Avatar" />
            <h4 class="card-title"><small>{name}</small></h4>
            <p> {address} </p>
            <p class="card-text">
              <Rating initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly />
              <br />
              <small> <i class="fas fa-wifi"></i> {internet} </small>

            </p>
            <p class="card-text">
              <h3>$   {price}</h3>
            </p>
            <button
              onClick={() => props.handleAddHotel(props.hotel)}
              className="btn btn-info ps-5 pe-5 ms-2"> {element}
              <span className="ms-3">Book Now</span></button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hotel;