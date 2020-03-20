import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addBike } from '../../store/thunk';

import './index.css';

const CreationForm = ({ className, dispatch }) => {
  const inputName = useRef(null);
  const inputType = useRef(null);
  const inputPrice = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      addBike({
        name: inputName.current.value,
        type: inputType.current.value,
        rentPrice: inputPrice.current.value
      })
    );
    inputName.current.value = '';
    inputPrice.current.value = '';
  };
  return (
    <form onSubmit={onSubmit} className={`${className} creation-panel`}>
      <h2>
        <span role="img" aria-label="money-mouth">
          &#129297;
        </span>
        Create new rent
      </h2>
      <div className="creation-panel__form">
        <div className="creation-panel__name">
          <p>Bike name</p>
          <input ref={inputName} type="text" placeholder="Bike name" required />
        </div>
        <div className="creation-panel__type">
          <p>Bike type</p>
          <select ref={inputType}>
            <option>Mountain</option>
            <option>Road</option>
            <option>Custom</option>
          </select>
        </div>
        <div className="creation-panel__price">
          <p>Rent price</p>
          <input
            ref={inputPrice}
            type="number"
            min="0"
            placeholder="99.00"
            required
          />
        </div>
        <div className="creation-panel__submit">
          <input type="submit" value="Submit rent" />
        </div>
      </div>
    </form>
  );
};

export default connect()(CreationForm);
