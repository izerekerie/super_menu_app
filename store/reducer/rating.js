// auth
import {SET_RATING } from '../actions/rating';

const initialState = {
  rating: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RATING:
      return {
        rating:action.payload,
      };   
    default:
      return state;
  }
};