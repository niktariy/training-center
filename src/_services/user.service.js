import API, { SECURE_API } from '../_api/config';

const loginService = userData => API.post('/login', userData);

const logoutService = () => API.post('/logout');

const getLoggedUser = token => SECURE_API.get('user_profile');

const getUserProfile = userId => SECURE_API.get(`/user_profile/${userId}`);

export const userService = {
  login: loginService,
  logout: logoutService,
  getCurrentUser: getLoggedUser,
  getUserByID: getUserProfile,
};
