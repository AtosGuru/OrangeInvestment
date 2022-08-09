import api from '../../utils/api';
import { setAlert } from '../alert';
import {
    GET_BALANCE,
  GET_BALANCE_ERROR,
  SET_BALANCE,
    SET_BALANCE_ERROR
} from './types';

// Get user
export const getBalance = () => async (dispatch) => {
    // console.log("action ID" , id);
    try {
    const res = await api.get(`/admin/balance/getBalance`);
    console.log('Balance with Specific ID : '  , res.data);
    dispatch({
      type: GET_BALANCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_BALANCE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//SET BALANCE 
export const setBalance = (formData) => async (dispatch) => {
  console.log("Action FOrm Data" , formData);
  try {
  const res = await api.post(`/admin/balance/setBalance`, formData);
  // console.log('SET FORM DATA RESULT :  '  , res.data);
  dispatch({
    type: SET_BALANCE,
    payload: res.data
  });
    
  dispatch(setAlert('Demo Successful'));
   
    
} catch (err) {
  dispatch({
    type: SET_BALANCE_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
  });
}
};






