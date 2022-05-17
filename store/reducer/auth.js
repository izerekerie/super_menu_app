// auth
import {SIGNIN,SIGNUP } from '../actions/auth';

const initialState = {
  token: null,
  user:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        token: action.token,
        user:action.user,
      };   
    default:
      return state;
  }
};