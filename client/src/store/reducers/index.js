import * as types from '../types';

const getToggleRentedBikes = (bikes, id, rentedTime) => {
  return {
    bikes: bikes.map(bike => {
      if (bike.id === id)
        return {
          ...bike,
          rented: !bike.rented,
          rentedTime: rentedTime || bike.rentedTime
        };
      return bike;
    })
  };
};

export default (state, action) => {
  switch (action.type) {
    case types.LOAD_BIKES: {
      return {
        bikes: action.bikes
      };
    }
    case types.ADD_BIKE: {
      return {
        bikes: [...state.bikes, action.bike]
      };
    }
    case types.REMOVE_BIKE: {
      return {
        bikes: state.bikes.filter(bike => bike.id !== action.id)
      };
    }
    case types.RENT_BIKE: {
      return getToggleRentedBikes(state.bikes, action.id, action.rentedTime);
    }
    case types.CANCEL_RENT: {
      return getToggleRentedBikes(state.bikes, action.id);
    }
    default:
      return state;
  }
};
