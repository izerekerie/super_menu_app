export const SET_ORDER = 'SET_ORDER';
import axios from 'axios';

 const baseUrl='http://196.223.240.154:8099/supapp/api'

export const paywithmomo = (data) => {
   
  return async dispatch => {
    console.log(data)
      const res = await axios.post(`${baseUrl}/payments/momo`, data);
      
      const resData = res.data;
      console.log(resData)
      if(!resData.success){
        throw new Error(resData.message);
      }
      dispatch({ type: SET_ORDER, payload:resData});
  };
};

export const paywithcard = (data) => {
    return async dispatch => {
        const res = await axios.post(`${baseUrl}/payments/card`, data);
        const resData = res.data;
        console.log(resData)
        if(!resData.success){
          throw new Error(resData.message);
        }
        dispatch({ type: SET_ORDER, payload:resData});
    };
  };

  export const paywithcash = (data) => {
    return async dispatch => {
        const res = await axios.post(`${baseUrl}/payments/cash`, data);
        const resData = res.data;
        console.log(resData);
        if(!resData.success){
          throw new Error(resData.message);
        }
        dispatch({ type: SET_ORDER, payload:resData});
    };
  };
