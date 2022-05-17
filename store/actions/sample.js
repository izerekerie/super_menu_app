// auth
export const SIGNUP = 'SIGNUP';
export const UPDATE = 'UPDATE';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
import baseUrl from "../../utils/url";
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import jwtDecode from "jwt-decode";

let timer;

export const authenticate = (userId, token, expiryTime,user) => {
  return dispatch => {
    dispatch(setLogoutTimer(expiryTime));
    dispatch({ type: AUTHENTICATE, userId: userId, token: token,user });
  };
};

export const signup = (data) => {
  return async dispatch => {
      let res = await axios.post(`${baseUrl}/user/register`, data);
      const resData = await res.data;
      if(!resData.success){
        throw new Error(resData.message);
      }
      dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId });
  };
};

export const login = (data) => {
  return async dispatch => {
    
      let res = await axios.post(`${baseUrl}/user/login`, data);
     
      const resData = res.data;
      if(!resData.success){
        throw new Error(resData.message);
      }
      const token = resData.message;
      let user = jwtDecode(token);
      let exipTime = user.exp;
        user = await currentUser(user.user_id);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      
      dispatch(authenticate(user._id, token,parseInt(exipTime) * 1000,user));
      const expirationDate = new Date(new Date().getTime() + parseInt(exipTime) * 1000);
      saveDataToStorage(token, user._id, expirationDate,user);
  };
};


export const currentUser = async (userId) => {
  try{
    let res = await axios.get(`${baseUrl}/user/one/${userId}`);
    return res.data.data;
    }catch (e) {
        console.log(e)
    }
};


export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

export const updateUser = (data) => {
  return async (dispatch, getState) => {
    console.log("we are in action update user function", data);
    const userId = getState().auth.userId;
    const token = getState().auth.token;
    let res = await axios.post(`${baseUrl}/user/update`, {
      "name": data.name,
	    "email": data.email,
	    "followers":data.followers,
    	"isDesigner": data.isDesigner,
    	"username": data.username
    });
    const resData = res.data;

    console.log(resData);
    if (!res.data.success) {
      throw new Error('Something went wrong!');
    }
    if(userId==data._id){
      dispatch({
        type: UPDATE,
        token:token,
        userId: userId,
        user:resData
      });
    }
  };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, expirationDate,user) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString(),
      user:user
    })
  );
};


export const updatePassword = ({old_password,new_password}) => {
  return async (dispatch, getState) => {
    
    const userId = getState().auth.userId;
    const token = getState().auth.token;
    let res = await axios.post(`${baseUrl}/user/password`, {
      old_password,
      new_password
    });
    const resData = res.data;

    console.log(resData);
    if (!res.data.success) {
      throw new Error('Something went wrong!');
    }
    if(userId==data._id){
      dispatch({
        type: UPDATE,
        token:token,
        userId: userId,
        user:resData
      });
    }
  };
};


export const updateShippingAddress = (data) => {
  return async (dispatch, getState) => {
    
    const userId = getState().auth.userId;
    const token = getState().auth.token;
    let res = await axios.post(`${baseUrl}/user/shipping`, data);
    const resData = res.data;

    console.log(resData);
    if (!res.data.success) {
      throw new Error('Something went wrong!');
    }
    if(userId==data._id){
      dispatch({
        type: UPDATE,
        token:token,
        userId: userId,
        user:resData
      });
    }
  };
};