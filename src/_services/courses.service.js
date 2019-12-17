import Api from '../api/config';

const API_URL = 'course';

const getAllCourses = () => Api().get(`${API_URL}/all`);

const getCourseById = courseId => Api().get(`${API_URL}/${courseId}`);

const enrollCourse = courseId => Api().post(`${API_URL}/${courseId}/subscribe`);
const leaveCourse = courseId => Api().post(`${API_URL}/${courseId}/unsubscribe`);

const createCourse = courseData => Api().post(`${API_URL}/create`, courseData);
const updateCourse = (courseId, courseData) =>
  Api().put(`${API_URL}/${courseId}/update`, courseData);

const getLecturerCourses = () => Api().get(`lecturer/my_courses`);
const getListenerCourses = () => Api().get(`listener/my_courses`);

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
