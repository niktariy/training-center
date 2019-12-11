import API, { SECURE_API } from '../api/config';

const login = authData => API.post('/login', authData);

const logout = () => SECURE_API.post('/logout');

export const authService = {
  login,
  logout,
};
