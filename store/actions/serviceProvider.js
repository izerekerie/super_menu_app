export const SET_SERVICEPROVIDERS = 'SET_SERVICEPROVIDERS';
import axios from "axios";
import baseUrl from '../../utils/url';

export const fetchServiceProviders = () => {
  return async (dispatch, getState) => {
    try {
        const ServiceProviders = await axios.get(`${baseUrl}/service-providers?page=0&size=30`);
        const resData = ServiceProviders.data.content;
        // console.log(resData);
          dispatch({
            type: SET_SERVICEPROVIDERS,
            serviceProviders: resData,
          });
      } catch (error) {
        throw error;
      }
  };
};