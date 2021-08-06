/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

import { API_URL } from '../config/constants'
import NavigationService from '../navigation/NavigationService'
import store from '../store'
import { SAVE_TOKEN } from '../types'

export const apiRequest = async (endpoint, method = 'get', body = {}, contentType = 'application/json') => {
  try {
    const token = await AsyncStorage.getItem('token')

    const url = `${API_URL}${endpoint}`

    const request = await axios(url, {
      data: method === 'get' ? null : { ...body },
      method: method.toUpperCase(),
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': contentType,
        Accept: '*/*',
      },
    })

    return request
  } catch (error) {
    console.log('api', error.response)

    const originalRequest = error?.response?.config

    if (error.response?.status === 403 && (!error.response?.config?.url === `${API_URL}/user-login` || !error.response?.config?.url === `${API_URL}/refresh-token`)) {
      await AsyncStorage.multiRemove(['user', 'token'])
      NavigationService.navigate('Main', {})
      return Promise.reject(error)
    }

    return Promise.reject(error)
  }
}

export const showApiError = (message = '', tryAgain = true, tryAgainFunc = null, tryAgainText = 'Try Again', title = '') => {
  if (message) {
    Alert.alert(
      title,
      message,
      [
        { text: 'Dismiss' },
        tryAgain && {
          text: tryAgainText,
          onPress: tryAgainFunc,
        },
      ],
    )
  }
}
