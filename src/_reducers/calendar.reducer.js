import {
  GET_LESSONS_DATE_REQUEST,
  GET_LESSONS_DATE_SUCCESS,
  GET_LESSONS_DATE_FAILURE,
} from '../_actions';
import createReducer from '../_utils/createReducer';

const defaultState = {
  calendarLessons: [],
  isUserLoginProcessing: false,
  errorMessage: null,
};

export default createReducer(defaultState, (state, action) => ({
  [GET_LESSONS_DATE_REQUEST]: () => ({
    ...state,
    isUserLoginProcessing: true,
  }),
  [GET_LESSONS_DATE_SUCCESS]: () => ({
    ...state,
    isUserLoginProcessing: false,
    calendarLessons: action.payload.lessons,
  }),
  [GET_LESSONS_DATE_FAILURE]: () => ({
    ...state,
    isUserLoginProcessing: false,
    errorMessage: action.payload,
  }),
}));
