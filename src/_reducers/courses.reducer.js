import {
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,
  ALL_COURSES_FAILURE,
  COURSE_BY_ID_REQUEST,
  COURSE_BY_ID_SUCCESS,
  COURSE_BY_ID_FAILURE,
} from '../_actions/courses.actions';
import createReducer from '../_utils/createReducer';

const defaultState = {
  isRequestProcessing: false,
  courses: [],
  errorMessage: null,
};

export default createReducer(defaultState, (state, action) => ({
  [ALL_COURSES_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [ALL_COURSES_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
    courses: action.payload.courses,
  }),
  [ALL_COURSES_FAILURE]: () => ({
    ...state,
    errorMessage: action.payload.error,
  }),
  [COURSE_BY_ID_REQUEST]: () => ({}),
  [COURSE_BY_ID_SUCCESS]: () => ({}),
  [COURSE_BY_ID_FAILURE]: () => ({}),
}));
