import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeBike, rentBike, cancelRent } from '../../store/thunk';
import AvailableList from '../AvailableList';
import RentedList from '../RentedList';
import Popup from '../Popup';

import './index.css';

const BikesCart = ({ bikes, dispatch }) => {
  const [rentBikeId, setRentBikeId] = useState(null);
  const rentedBikes = bikes.filter(bike => bike.rented);
  const availableBicycles = bikes.filter(bike => !bike.rented);
  const totalRentPrice = rentedBikes.reduce((sum, bike) => {
    const bikeTotalPrice =
      bike.rentedTime > 20
        ? (bike.rentPrice / 2) * bike.rentedTime
        : bike.rentPrice * bike.rentedTime;
    return sum + bikeTotalPrice;
  }, 0);
  const removeHandler = id => {
    dispatch(removeBike(id));
  };
  const rentHandlerToShowPopup = id => {
    setRentBikeId(id);
  };
  const rentHandler = rentedTime => {
    dispatch(rentBike(rentBikeId, { rented: true, rentedTime }));
    setRentBikeId(null);
  };
  const cancelRentHandler = id => {
    dispatch(cancelRent(id, { rented: false }));
  };
  const hidePopup = () => {
    setRentBikeId(null);
  };
  return (
    <div className="bikes-cart">
      <h2>
        <span role="img" aria-label="star-struck">
          &#129321;
        </span>
        Your rent (Total: ${totalRentPrice})
      </h2>
      <ul className="bikes-cart__rent-list">
        <RentedList list={rentedBikes} cancelRentHandler={cancelRentHandler} />
      </ul>
      <h2>
        <span role="img" aria-label="bicycle">
          🚲
        </span>
        Available bicycles ({availableBicycles.length})
      </h2>
      <ul className="bikes-cart__available-list">
        <AvailableList
          list={availableBicycles}
          removeHandler={removeHandler}
          rentHandler={rentHandlerToShowPopup}
        />
      </ul>
      {rentBikeId && <Popup rentHandler={rentHandler} hide={hidePopup} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bikes: state.bikes
  };
};

export default connect(mapStateToProps)(BikesCart);
