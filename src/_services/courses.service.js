import { SECURE_API } from '../_api/config';

const API_URL = 'course';

const getAllCourses = () => SECURE_API.get(`${API_URL}/all`);

const getCourseById = id => SECURE_API.get(`${API_URL}/id`);

export const coursesService = {
  getAllCourses,
  getCourseById,
};
