import { SECURE_API } from '../api/config';

const API_URL = 'lecturer';

const getLecturerCourses = () => SECURE_API.get(`${API_URL}/my_courses`);

export const lecturerService = {
  getLecturerCourses,
};
