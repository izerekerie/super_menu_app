// auth
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
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

export const signin = (data) => {
  return async dispatch => {
      let res = await axios.post(`${baseUrl}/auth/signin`, data);
      const resData = res.data;

      if(res.error){
        throw new Error(res.error);
      }
      const token = resData.token.accessToken;

      const user = {
        id: resData.id,
        firstName: resData.firstName,
        lastName: resData.lastName,
        username: resData.username,
        mobile: resData.mobile,
        email: resData.email
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      dispatch({ type:SIGNIN , token, user});
  };
};

