import {
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_FAILURE,
  GET_COURSE_BY_ID_REQUEST,
  GET_COURSE_BY_ID_SUCCESS,
  GET_COURSE_BY_ID_FAILURE,
} from '../_actions/courses.actions';
import createReducer from '../_utils/createReducer';

const defaultState = {
  isRequestProcessing: false,
  courses: [],
  errorMessage: null,
};

export default createReducer(defaultState, (state, action) => ({
  [GET_ALL_COURSES_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [GET_ALL_COURSES_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
    courses: action.payload.courses,
  }),
  [GET_ALL_COURSES_FAILURE]: () => ({
    ...state,
    errorMessage: action.payload.error,
  }),
  [GET_COURSE_BY_ID_REQUEST]: () => ({}),
  [GET_COURSE_BY_ID_SUCCESS]: () => ({}),
  [GET_COURSE_BY_ID_FAILURE]: () => ({}),
}));
