export const SET_MENU = 'SET_MENU';
export const SET_MENU_BY_SERVICEPROVIDER = 'SET_MENU_BY_SERVICE_PROVIDER';
import axios from "axios";
import baseUrl from '../../utils/url';

export const fetchMenu = () => {
  return async (dispatch, getState) => {
    try {
        const menu = await axios.get(`${baseUrl}/menu-categories?page=0&size=30`);
        const resData = menu.data.content;
        // console.log(resData);
          dispatch({
            type: SET_MENU,
            menu: resData,
          });
      } catch (error) {
        throw error;
      }
  };
};


export const fetchMenuByServiceProvider = () => {
    return async (dispatch, getState) => {
      try {
          const menu = await axios.get(`${baseUrl}/menu-categories/listAll/service-provider/2`);
          const resData = menu.data;
        //   console.log(resData);
            dispatch({
              type: SET_MENU_BY_SERVICEPROVIDER,
              menu: resData,
            });
        } catch (error) {
          throw error;
        }
    };
  };