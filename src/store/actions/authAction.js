import AsyncStorage from '@react-native-community/async-storage';
import tracker from '../../api/tracker';
import { navigate } from '../../navigationRef';
import jwtDecode from 'jwt-decode';
import { signupCheck } from '../../helpers/functions'



export const signIn = (credentials) => async (dispatch, getState) => {
  try {
    // let index = credentials.phone.indexOf('-');
    // credentials.phone = credentials.phone.slice(0, index) + credentials.phone.slice(index + 1);//temporary
    const response = await tracker.post(`/api/account/signin`, credentials);
    console.log("SignIn", response.data);
    let accessToken = response.data.token;
    let refreshToken = response.data.refresh_token;
    await AsyncStorage.setItem('token', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
    let userId = jwtDecode(accessToken).sub;
    console.log("SignIn UserId", userId)
    await AsyncStorage.setItem('userId', userId);
    dispatch({
      type: 'SIGNIN_SUCCESS',
      payload: {accessToken, refreshToken, userId},
    });
    await signupCheck(dispatch, getState().user.notificationId);
  } catch (e) {
    if (e.response.data) {
      throw 'Invalid Account';
    } else {
      throw 'Server error please try later';
    }
  }
};


export const signUp = (newUser) => async (dispatch) => {
  try {
    console.log(newUser);
    const response = await tracker.post(`/api/account/signup`, newUser);
    let accessToken = response.data.token;
    let refreshToken = response.data.refresh_token;
    await AsyncStorage.setItem('refreshToken', refreshToken);
    await AsyncStorage.setItem('token', accessToken);
    let userId = jwtDecode(accessToken).sub;
    await AsyncStorage.setItem('userId', userId);
    dispatch({
      type: 'SIGNIN_SUCCESS',
      payload: { accessToken, refreshToken, userId },
    });
    navigate('Bot');
  } catch (err) {
    if (err.response.status === 422) {
      throw 'Account already exits';
    }
    if (err.response.status === 502) {
      throw 'Failed to sign up please try again';
    } else {
      console.log(err.response.data.error.errorMessage);
      throw 'Email or phone already exits';
    }
  }
};


export const tryLocalSignin = () => async (dispatch, getState) => {
  let accessToken = await AsyncStorage.getItem('token');
  let refreshToken = await AsyncStorage.getItem('refreshToken');
  let firstTimeAppLoaded = await AsyncStorage.getItem('firstTimeAppLoaded');
  let userId = accessToken && jwtDecode(accessToken).sub;
  if (accessToken && refreshToken) {
    await AsyncStorage.setItem('userId', userId);
    dispatch({type: 'SIGNIN_SUCCESS', payload: {accessToken, refreshToken, userId}});
    signupCheck(dispatch, getState().user.notificationId);
  } else if (firstTimeAppLoaded) {
    navigate('Signin');
  } else {
    await AsyncStorage.setItem('firstTimeAppLoaded', 'true');
    navigate('About');
  }
};

export const logOut = async () => {
  await tracker.get('/api/account/logout');
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('refreshToken');
};



