import { getCookie } from '../_helpers';
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from '../_actions/auth.actions';
import createReducer from '../_utils/createReducer';

const token = getCookie('JSESSIONID') || sessionStorage.getItem('token');
const auth = !!token;

const defaultState = auth
  ? {
      isLoggedIn: true,
      isUserLoginProcessing: false,
      isUserLogoutProcessing: false,
      errorMessage: null,
      token,
      auth,
    }
  : {
      isLoggedIn: false,
      isUserLoginProcessing: false,
      isUserLogoutProcessing: false,
      errorMessage: null,
      token,
      auth,
    };

export default createReducer(defaultState, (state, action) => ({
  [USER_LOGIN_REQUEST]: () => ({
    ...state,
    isUserLoginProcessing: true,
  }),
  [USER_LOGIN_SUCCESS]: () => ({
    ...state,
    isUserLoginProcessing: false,
    isLoggedIn: true,
    token: action.payload.token,
  }),
  [USER_LOGIN_FAILURE]: () => ({
    ...state,
    isUserLoginProcessing: false,
    errorMessage: action.payload,
  }),
  [USER_LOGOUT_REQUEST]: () => ({
    ...state,
    isUserLogoutProcessing: true,
  }),
  [USER_LOGOUT_SUCCESS]: () => ({
    ...state,
    isUserLogoutProcessing: false,
    isLoggedIn: false,
    token: action.payload.token,
  }),
  [USER_LOGOUT_FAILURE]: () => ({
    ...state,
    isUserLogoutProcessing: false,
    errorMessage: action.payload,
  }),
}));
