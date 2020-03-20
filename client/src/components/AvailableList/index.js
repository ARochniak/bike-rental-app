import React from 'react';

const AvailableList = ({ list, rentHandler, removeHandler }) => {
  return list.map(bike => (
    <li key={bike.id}>
      <p>
        {bike.name} / {bike.type} / ${bike.rentPrice}
      </p>
      <div>
        <button type="button" onClick={() => rentHandler(bike.id)}>
          Rent
        </button>
        <button type="button" onClick={() => removeHandler(bike.id)}>
          Delete
        </button>
      </div>
    </li>
  ));
};

export default AvailableList;
