import API from '../_utils/api';

const API_URL = 'courses';

export getCourses = () => dispatch =>
  API.get(`${API_URL}`);
