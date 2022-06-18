// auth
export const SET_RATING = 'SET_RATING';
export const CREATE_RATING = 'CREATE_RATING';
import axios from 'axios';

 const baseUrl='http://196.223.240.154:8099/supapp/api'

export const rate = (data) => {
  console.log(data)
  return async dispatch => {
    
    console.log("data ",data);
      const res = await axios.post(`${baseUrl}/service-rating`, data);
      const resData = res.data;
      console.resData
      if(!resData.success){
        throw new Error(resData.message);
      }
      dispatch({ type: CREATE_RATING, payload:resData});
  };
};