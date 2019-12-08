import { history } from '../_utils/history';
import { userService } from '../_services';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

const _parseJSON = response => {
  return response.text().then(function(text) {
    return text ? JSON.parse(text) : {};
  });
};

export const userLogin = ({ username, password }) => dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  userService
    .login({ username, password })
    .then(({ headers, status }) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: headers.authorization,
      });
      sessionStorage.setItem('authToken', headers.authorization);
      history.push('/profile');
    })
    .catch(error => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: error.message,
      });
    });
};

const userLogout = () => dispatch => {
  dispatch({
    type: USER_LOGOUT_REQUEST,
  });

  userService
    .logout()
    .then(() => {
      sessionStorage.removeItem('token');
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: {
          token: '',
        },
      });
      history.push('/');
    })
    .catch(error => {
      dispatch({
        type: USER_LOGOUT_FAILURE,
        payload: error.message,
      });
    });
};
