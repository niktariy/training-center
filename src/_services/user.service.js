import Api from '../api/config';

const API_URL = '/user_profile';

const getAllUsers = () => Api().get(`${API_URL}/all`);

const getLoggedUser = token => Api().get(`${API_URL}`);

const getUserProfile = userId => Api().get(`${API_URL}/${userId}`);

const getUserRole = userId => Api().get(`${API_URL}/${userId}/role`);

const updateLoggedUser = userData => Api().put(`${API_URL}/update`, userData);

const updateUserPassword = newPswd =>
  Api().put(`${API_URL}/edit_password`, newPswd);

export const userService = {
  getAllUsers,
  getCurrentUser: getLoggedUser,
  getUserByID: getUserProfile,
  getRoleByID: getUserRole,
  updateCurrentUser: updateLoggedUser,
  updatePassword: updateUserPassword,
};
