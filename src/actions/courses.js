import {apiRequest, showApiError} from '../helpers/api';
import {Alert} from 'react-native';
import {
  GET_COURSE_LIST,
  GET_ENROLLED_COURSES,
  LOADING,
  REFRESHING,
} from '../types';
import {checkTokenValidity} from '../helpers/Utils';

export const getAllCourses =
  (navigation, refreshing = false) =>
  dispatch => {
    dispatch({
      type: refreshing ? REFRESHING : LOADING,
      payload: true,
    });

    apiRequest('/users/get-all-courses')
      .then(res => {
        console.log(res.data);
        // Alert.alert('Courses gotten successfully');
        dispatch({
          type: GET_COURSE_LIST,
          payload: res.data,
        });
      })
      .catch(error => {
        const message = error?.response?.data?.message ?? error.message;
        checkTokenValidity(navigation);
        showApiError(message);
      })
      .finally(() => {
        dispatch({
          type: LOADING,
          payload: false,
        });
        dispatch({
          type: REFRESHING,
          payload: false,
        });
      });
  };

export const enrollInCourse = (data, navigation) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  apiRequest('/users/enroll-in-course', 'post', data)
    .then(res => {
      console.log(res.data);
      Alert.alert(
        'Success',
        'Course Enrollment was successful. pull to refresh',
      );
    })
    .catch(error => {
      const message = error?.response?.data?.message ?? error.message;
      checkTokenValidity(navigation);
      showApiError(message);
    })
    .finally(() => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};

export const getEnrolledCourses =
  (id, navigation, refreshing = false) =>
  dispatch => {
    dispatch({
      type: refreshing ? REFRESHING : LOADING,
      payload: true,
    });

    apiRequest(`/users/get-enrolled-courses/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: GET_ENROLLED_COURSES,
          payload: res.data,
        });
        Alert.alert('Enrolled Courses gotten successfully');
      })
      .catch(error => {
        const message = error?.response?.data?.message ?? error.message;
        checkTokenValidity(navigation);
        showApiError(message);
      })
      .finally(() => {
        dispatch({
          type: LOADING,
          payload: false,
        });
        dispatch({
          type: REFRESHING,
          payload: false,
        });
      });
  };

export const cancelEnrollment = (id, navigation) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true,
  });

  apiRequest(`/users/cancel-enrollment/${id}`, 'delete')
    .then(res => {
      console.log(res.data);
      Alert.alert(
        'Success',
        'Enrollment cancelled successfully, pull to refresh',
      );
    })
    .catch(error => {
      const message = error?.response?.data?.message ?? error.message;
      checkTokenValidity(navigation);
      showApiError(message);
    })
    .finally(() => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};
