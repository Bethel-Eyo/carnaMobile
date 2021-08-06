import {AsyncStorage, Alert} from 'react-native';
import jwtDecode from 'jwt-decode';

// decode user token
decodeJwtToken = token => {
  const decoded = JSON.stringify(jwtDecode(token));
  return JSON.parse(decoded);
};

// check if token has expired.
export const checkTokenValidity = async navigation => {
  const token = await AsyncStorage.getItem('token');
  let payload = {};
  payload = decodeJwtToken(token);
  Alert.alert(payload);
  if (payload.exp < Date.now() / 1000) {
    navigation.navigate('Auth');
    return;
  } else {
    Alert.alert('Got to the other side here');
  }
};
