// auth
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
import axios from 'axios';

 const baseUrl='http://196.223.240.154:8099/supapp/api'

export const signup = (data) => {
  return async dispatch => {
      let res = await axios.post(`${baseUrl}/auth/client/signup`, data);
      const resData = await res.data;
      if(!resData.success){
        throw new Error(resData.message);
      }
      dispatch({ type: SIGNUP, resData});
  };
};

export const signin = (data) => {
  return async dispatch => {
    
      let res = await axios.post(`${baseUrl}/auth/signin`, data);
     
      const resData = res.data;
      if(!resData.success){
        throw new Error(resData.message);
      }
      const token = resData.token.accessToken;
     
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      
        dispatch({ type:SIGNIN , token, resData});
  };
};

