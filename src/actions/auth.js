import { Alert, AsyncStorage } from 'react-native'

import {
  SAVE_TOKEN,
  SAVE_USER,
  LOADING,
  SIGN_OUT,
  GET_CURRENT_USER,
  SIGN_UP_ERROR,
} from '../types'
import { apiRequest, showApiError } from '../helpers/api'

export const signOut = (navigation) => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
  navigation.navigate('Auth');
}

export const saveUser = (token, user) => (dispatch) => {
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  })

  dispatch({
    type: SAVE_USER,
    payload: user,
  })
}

export const login = (user, navigation) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  apiRequest('/user-login', 'post', user)
    .then(async ({ data }) => {
      dispatch({
        type: SAVE_USER,
        payload: user,
      })
      Alert.alert('Logged in Successfully');

      dispatch({
        type: SAVE_TOKEN,
        payload: data.token,
      });

      dispatch({
        type: GET_CURRENT_USER,
        payload: data.user,
      });

      navigation.navigate('Main');

    })
    .catch((error) => {
      const message = error?.response?.data?.message ?? error.message
      showApiError(message, true, () => dispatch(login(user, navigation)))
    })
    .finally(() => {
      dispatch({
        type: LOADING,
        payload: false,
      })
    })
}

export const register = (user, navigation) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })

  apiRequest('/register-user', 'post', user)
    .then(({ data }) => {
      let loginData = {
        username: user.username,
        password: user.password,
      }
      Alert.alert("Signed up Successfully")
      dispatch(login(loginData, navigation))
    })
    .catch((error) => {
      if (error?.response?.data?.data) {
        dispatch({
          type: SIGN_UP_ERROR,
          payload: error?.response?.data?.data,
        })
      } else {
        const message = error?.response?.data?.message || error?.data?.detail || error.message
        showApiError(message, true, () => dispatch(register(user, navigation)))
      }
    })
    .finally(() => {
      dispatch({
        type: LOADING,
        payload: false,
      })
    })
}
