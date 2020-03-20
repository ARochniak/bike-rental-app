import React, { useRef } from 'react';

import './index.css';

const Popup = ({ rentHandler, hide }) => {
  const rentedTimeInput = useRef(null);
  const hidePopup = e => {
    if (e.target.closest('.popup__panel')) return false;
    hide();
    return true;
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="popup" onClick={hidePopup}>
      <div className="popup__panel">
        <div className="popup__field">
          <p>Enter rented time</p>
          <input
            ref={rentedTimeInput}
            type="number"
            min="1"
            defaultValue="1"
            step="1"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            rentHandler(rentedTimeInput.current.value);
          }}
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default Popup;
