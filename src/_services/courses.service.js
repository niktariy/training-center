import { SECURE_API } from '../api/config';

const API_URL = 'course';

const getAllCourses = () => SECURE_API.get(`${API_URL}/all`);

const getCourseById = courseId => SECURE_API.get(`${API_URL}/${courseId}`);

const enrollCourse = courseId =>
  SECURE_API.post(`${API_URL}/${courseId}/subscribe`);

const leaveCourse = courseId =>
  SECURE_API.post(`${API_URL}/${courseId}/unsubscribe`);

const createCourse = courseData =>
  SECURE_API.post(`${API_URL}/create`, courseData);

const updateCourse = courseData =>
  SECURE_API.put(`${API_URL}/update/${courseData.id}`, courseData);

export const coursesService = {
  getAllCourses,
  getCourseById,
  enrollCourse,
  leaveCourse,
  createCourse,
  updateCourse,
};
