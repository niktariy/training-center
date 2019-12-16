import API from '../api/config';

const API_URL = 'user_profile';

const getAllUsers = () => API.get(`${API_URL}/all`);

const getLoggedUser = token => API.get(`${API_URL}`);

const getUserProfile = userId => API.get(`${API_URL}/${userId}`);

const getUserRole = userId => API.get(`${API_URL}/${userId}/role`);

const updateLoggedUser = userData => API.put(`${API_URL}/update`, userData);

const updateUserPassword = newPswd =>
  API.put(`${API_URL}/edit_password`, newPswd);

export const userService = {
  getAllUsers,
  getCurrentUser: getLoggedUser,
  getUserByID: getUserProfile,
  getRoleByID: getUserRole,
  updateCurrentUser: updateLoggedUser,
  updatePassword: updateUserPassword,
};
