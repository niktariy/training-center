import API from '../api/config';

const API_URL = 'course';

const getAllCourses = () => API.get(`${API_URL}/all`);

const getCourseById = courseId => API.get(`${API_URL}/${courseId}`);

const enrollCourse = courseId => API.post(`${API_URL}/${courseId}/subscribe`);
const leaveCourse = courseId => API.post(`${API_URL}/${courseId}/unsubscribe`);

const createCourse = courseData => API.post(`${API_URL}/create`, courseData);
const updateCourse = (courseId, courseData) =>
  API.put(`${API_URL}/${courseId}/update`, courseData);

const getLecturerCourses = () => API.get(`lecturer/my_courses`);
const getListenerCourses = () => API.get(`listener/my_courses`);

export const coursesService = {
  getAllCourses,
  getCourseById,
  enrollCourse,
  leaveCourse,
  createCourse,
  updateCourse,
  getLecturerCourses,
  getListenerCourses,
};
