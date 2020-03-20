import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadBikes } from '../store/thunk';
import CreationForm from '../components/CreationForm';
import BikesCart from '../components/BikesCart';

import './index.css';

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(loadBikes());
  }, []);
  return (
    <div className="bike-rental">
      <h1 className="bike-rental__tittle">Awesome Bike Rental</h1>
      <CreationForm className="bike-rental__creation-panel" />
      <BikesCart />
    </div>
  );
};

export default connect()(App);
