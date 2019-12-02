import API from '../_utils/api';

const API_URL = 'settings/profile'

// User settings

export getUserProfile = () => dispatch =>
  API.get(`${API_URL}`);

export updateUserProfile = userData => dispatch =>
  API.put(`${API_URL}/update`, userData);
