import {SET_ORDER } from '../actions/order';

const initialState = {
  orders:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        orders: action.payload,
      };   
    default:
      return state;
  }
};