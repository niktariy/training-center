import Api from '../api/newConfig';

const login = authData => Api.post('login', authData);

export const authService = {
  login,
};
