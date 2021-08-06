import { GET_COURSE_LIST, GET_ENROLLED_COURSES } from "../types";

const initialState = {
  courses: null,
  enrolledCourses: null
};

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COURSE_LIST:
      return {
        ...state,
        courses: payload,
      };
      case GET_ENROLLED_COURSES:
      return {
        ...state,
        enrolledCourses: payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
