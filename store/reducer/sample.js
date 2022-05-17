// auth
import { AUTHENTICATE,LOGOUT,SIGNUP,UPDATE } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  user:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        user:action.user,
      };
    case LOGOUT:
      return initialState;   
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
        user:{}
      };
      case UPDATE:
        return {
          token: action.token,
          userId: action.userId,
          user:action.user
        };
    default:
      return state;
  }
};