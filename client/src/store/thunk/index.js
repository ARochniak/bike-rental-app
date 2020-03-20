import {
  LOAD_BIKES,
  ADD_BIKE,
  REMOVE_BIKE,
  RENT_BIKE,
  CANCEL_RENT
} from '../types';
import apis from '../../api';

export const loadBikes = () => {
  return dispatch => {
    apis
      .getBikes()
      .then(res => {
        const bikes = res.data.data;
        dispatch({
          type: LOAD_BIKES,
          bikes: bikes.map(bike => ({
            // eslint-disable-next-line no-underscore-dangle
            id: bike._id,
            name: bike.name,
            type: bike.type,
            rentPrice: bike.rentPrice,
            rented: bike.rented,
            rentedTime: bike.rentedTime
          }))
        });
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err.message));
  };
};

export const addBike = bike => {
  const payload = { ...bike, rented: false, rentedTime: 0 };
  return dispatch => {
    apis.addBike(payload).then(res => {
      dispatch({
        type: ADD_BIKE,
        bike: { ...payload, id: res.data.id }
      });
    });
  };
};

export const removeBike = id => {
  return dispatch => {
    apis.deleteBikeById(id).then(() => {
      dispatch({
        type: REMOVE_BIKE,
        id
      });
    });
  };
};

export const rentBike = (id, payload) => {
  return dispatch => {
    apis.updateBikeById(id, payload).then(() => {
      dispatch({
        type: RENT_BIKE,
        id,
        rentedTime: payload.rentedTime
      });
    });
  };
};

export const cancelRent = (id, payload) => {
  return dispatch => {
    apis.updateBikeById(id, payload).then(() => {
      dispatch({
        type: CANCEL_RENT,
        id
      });
    });
  };
};
