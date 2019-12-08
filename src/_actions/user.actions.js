import { userService } from '../_services';

export const GET_CURRENT_USER_REQUEST = 'GET_CURRENT_USER_REQUEST';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

export const GET_USER_BY_ID_REQUEST = 'GET_USER_BY_ID_REQUEST';
export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE';

export const getCurrentUser = () => dispatch => {
  dispatch({
    type: GET_CURRENT_USER_REQUEST,
  });

  userService
    .getCurrentUser()
    .then(res => {
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: {
          userData: res.data,
        },
      });
    })
    .catch(error => {
      console.log('err', error, error.request._header);
      dispatch({
        type: GET_CURRENT_USER_FAILURE,
        payload: error.message,
      });
    });
};

export const getUserById = userId => dispatch => {
  dispatch({
    type: GET_USER_BY_ID_REQUEST,
  });

  userService
    .getUserByID(userId)
    .then(res => {
      dispatch({
        type: GET_USER_BY_ID_SUCCESS,
        payload: {
          userData: res.data,
        },
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_BY_ID_FAILURE,
        payload: error.message,
      });
    });
};
