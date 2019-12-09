import {
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_FAILURE,
  GET_COURSE_BY_ID_REQUEST,
  GET_COURSE_BY_ID_SUCCESS,
  GET_COURSE_BY_ID_FAILURE,
  ENROLL_COURSE_REQUEST,
  ENROLL_COURSE_SUCCESS,
  ENROLL_COURSE_FAILURE,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_FAILURE,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  UPDATE_COURSE_FAILURE,
} from '../_actions/courses.actions';
import createReducer from '../_utils/createReducer';

const DEFAULT_COURSE = {
  id: '',
  courseName: '',
  courseDescription: '',
  courseDuration: '',
  startDate: '',
  category: '',
  imageUrl: 'https://picsum.photos/id/0/600/500',
};

const defaultState = {
  isRequestProcessing: false,
  courses: [],
  errorMessage: null,
  singleCourseData: DEFAULT_COURSE,
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
    isRequestProcessing: false,
    errorMessage: action.payload.error,
  }),

  [GET_COURSE_BY_ID_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [GET_COURSE_BY_ID_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
    singleCourseData: action.payload.courseData,
  }),
  [GET_COURSE_BY_ID_FAILURE]: () => ({
    ...state,
    isRequestProcessing: false,
    errorMessage: action.payload.error,
  }),

  // subscribe to course
  [ENROLL_COURSE_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [ENROLL_COURSE_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
  }),
  [ENROLL_COURSE_FAILURE]: () => ({
    ...state,
    isRequestProcessing: false,
    errorMessage: action.payload.error,
  }),

  // create new course
  [CREATE_COURSE_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [CREATE_COURSE_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
  }),
  [CREATE_COURSE_FAILURE]: () => ({
    ...state,
    isRequestProcessing: false,
    errorMessage: action.payload.error,
  }),

  // update course info
  [UPDATE_COURSE_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [UPDATE_COURSE_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
  }),
  [UPDATE_COURSE_FAILURE]: () => ({
    ...state,
    isRequestProcessing: false,
    errorMessage: action.payload.error,
  }),
}));
