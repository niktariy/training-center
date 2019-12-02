import API from '../_utils/api';

const API_URL = 'courses';
const FAKE_API_URL = 'unknown';

const getAllCourses = () => API.get(`${API_URL}`);
const getFakeAllCourses = () => API.get(`${FAKE_API_URL}`);

const getCourseById = id => API.get(`${API_URL}/id`);
const getFakeCourseById = id => API.get(`${FAKE_API_URL}/id`);

export const coursesService = {
  getAllCourses,
  getCourseById,
  getFakeAllCourses,
  getFakeCourseById,
};
