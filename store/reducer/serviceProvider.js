import {
    SET_SERVICEPROVIDERS
  } from '../actions/serviceProvider';
  
  const initialState = {
    availableServiceProviders: [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_SERVICEPROVIDERS:
        return {
          availableServiceProviders: action.serviceProviders
        };
    }
    return state;
  };