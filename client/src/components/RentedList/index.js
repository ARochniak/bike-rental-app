import React from 'react';

const RentedList = ({ list, cancelRentHandler }) => {
  return list.map(bike => (
    <li key={bike.id}>
      <p>
        {bike.name} / {bike.type} / ${bike.rentPrice} / {bike.rentedTime} hours
      </p>
      <button
        type="button"
        onClick={() => {
          cancelRentHandler(bike.id);
        }}
      >
        Cancel rent
      </button>
    </li>
  ));
};

export default RentedList;
