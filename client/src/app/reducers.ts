import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '@features/auth/authSlice';


export default combineReducers({
  auth: authReducer,
  
});
