import { SECURE_API } from '../api/config';

const API_URL = 'lesson';

const getLessonsCourse = courseId =>
  SECURE_API.get(`course/${courseId}/lessons`);

const getLessonInfo = lessonId => SECURE_API.get(`${API_URL}/${lessonId}`);

const createLesson = (courseId, lessonData) =>
  SECURE_API.post(`course/${courseId}/create_lesson`, lessonData);
const updateLesson = (lessonId, lessonData) =>
  SECURE_API.put(`${API_URL}/${lessonId}/update`, lessonData);
const deleteLesson = lessonId =>
  SECURE_API.delete(`${API_URL}/${lessonId}/delete`);

export const lessonService = {
  getLessonsCourse,
  getLessonInfo,
  createLesson,
  updateLesson,
  deleteLesson,
};
