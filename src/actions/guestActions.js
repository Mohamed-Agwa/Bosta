import axios from 'axios';
import { GET_DETAILS } from './types';

export const getDetails = (shipnum) => async dispatch => {       

    await axios.get(`https://tracking.bosta.co/shipments/track/${shipnum}`).then((res) => {
      if (!res.error) {
        console.log("IN ACTION")
        dispatch({
         type: GET_DETAILS, 
         payload: res.data,
         });
          };
      
  })
  .catch((err) => console.log('ERROR', err))}
