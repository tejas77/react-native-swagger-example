import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
  } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const logoutUser = () => {
  return (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  });
  console.log('Going back to Login Screen');
  Actions.auth();
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const url = 'http://petstore.swagger.io/v2';
    const usersPath = 'user';
    axios.get(`${url}/${usersPath}/${email}`)
    .then((response) => {
    console.log(response);
    const pass = response.data.password;
    if (pass === password) {
      console.log('Password Correct!!!');
      console.log(response.data.email);
      loginUserSuccess(dispatch, response.data.email);
    } else {
      loginUserFailed(dispatch);
    }
  }).catch(() => loginUserFailed(dispatch));
  };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, userem) => {
    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: userem
  });
  console.log('Going to Main Screen');
  Actions.main();
};
