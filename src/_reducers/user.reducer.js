import {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
} from '../_actions/user.actions';
import createReducer from '../_utils/createReducer';

const DEFAULT_USER = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  skype: '',
  avatar: 'https://i.pravatar.cc/150?img=69',
};

const defaultState = {
  isRequestProcessing: false,
  isCurrentUser: false,
  userData: DEFAULT_USER,
  errorMessage: null,
};

export default createReducer(defaultState, (state, action) => ({
  [GET_CURRENT_USER_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [GET_CURRENT_USER_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
    isCurrentUser: true,
    userData: action.payload.userData,
  }),
  [GET_CURRENT_USER_FAILURE]: () => ({
    ...state,
    errorMessage: action.payload.error,
  }),
  [GET_USER_BY_ID_REQUEST]: () => ({
    ...state,
    isRequestProcessing: true,
  }),
  [GET_USER_BY_ID_SUCCESS]: () => ({
    ...state,
    isRequestProcessing: false,
    userData: action.payload.userData,
  }),
  [GET_USER_BY_ID_FAILURE]: () => ({
    ...state,
    isRequestProcessing: false,
  }),
}));
