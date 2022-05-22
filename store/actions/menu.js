export const FETCH_ALL = 'FETCH_ALL';
export const GETONE = 'GETONE';
import axios from 'axios';
import baseUrl from '../../utils/url';
 

export const getall=()=> async (dispatch) => {
  
    try{
        
        const response= await axios.get(`${baseUrl}/menu-categories?page=0&size=30`)
        // console.log('there'+JSON.stringify(response.data.content))
        const data=response.data.content;
   
         dispatch({type:FETCH_ALL,payload:data});
    }catch(err){
        if(err.response){
            console.log('err'+err.message)
        }

    }
     
    }

