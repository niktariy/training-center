import API from '../_utils/api';

const loginService = userData =>
  API.post('/login', userData);

const logoutService = () =>
  API.post('logout');

export const userService = {
  login: loginService,
  logout: logoutService,
};
