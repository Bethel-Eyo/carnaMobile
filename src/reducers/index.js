import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading'
import courses from './courses'

export default combineReducers({
  auth,
  loading,
  courses
});