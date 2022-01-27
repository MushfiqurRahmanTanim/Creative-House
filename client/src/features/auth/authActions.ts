import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, errorAlert, handleErrorMessage, successAlert } from '@utils/';

import axios from 'axios';




const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptSignup = createAsyncThunk(
  'auth/attemptSignup',
  async (signupData:any)=> {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/auth/signup`,
        signupData,
        config
      );
      console.log(data)
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err: any) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptLogin = createAsyncThunk(
  'auth/attemptLogin',
  async loginData => {
    try {
      const { data } = await axios.post(
        `$/api/user/login`,
        loginData,
        config
      );
      successAlert(data.message);
      errorAlert(data.error);

      return data;
    } catch (err:any) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
