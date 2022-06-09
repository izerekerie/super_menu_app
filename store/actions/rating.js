// auth
export const SET_RATING = 'SET_RATING';
import axios from 'axios';

 const baseUrl='http://196.223.240.154:8099/supapp/api'

export const signup = (data) => {
  return async dispatch => {
      const res = await axios.post(`${baseUrl}/auth/client/signup`, data);
      const resData = res.data;
      
      if(!resData.success){
        throw new Error(resData.message);
      }
      dispatch({ type: SIGNUP, resData});
  };
};