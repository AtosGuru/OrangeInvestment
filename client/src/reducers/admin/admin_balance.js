import {
   GET_BALANCE,
    SET_BALANCE,
    GET_BALANCE_ERROR,
    SET_BALANCE_ERROR
  } from '../../actions/admin/types';
  
  const initialState = {
    balances: [],
    balance: null,
    loading: true,
    error: {},
  };
  
  function balanceReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case SET_BALANCE:
          return {
            ...state,
            balance: payload,
            loading: false
            };
        
        case GET_BALANCE:
            return {
                ...state,
                balance: payload,
                loading: false
            };

      default:
        return state;
    }
  }
  
  export default balanceReducer;
  