import { history } from '../_utils/history';
import { userService } from '../_services';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const userLoginAction = ({ username, password }) => dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  });

  const userData = {
    username,
    password,
  };

  userService
    .login(userData)
    .then(res => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          token: res.data.token,
          auth: true,
        },
      });
      sessionStorage.setItem('token', res.data.token);
      history.push('/courses');
    })
    .catch(error => {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: error.message,
      });
    });
};

export const userLogoutAction = () => dispatch => {
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
  // ;
};
