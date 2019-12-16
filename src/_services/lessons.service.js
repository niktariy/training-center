import API from '../api/config';

const API_URL = 'lesson';

const getLessonsCourse = courseId => API.get(`course/${courseId}/lessons`);

const getLessonInfo = lessonId => API.get(`${API_URL}/${lessonId}`);

const createLesson = (courseId, lessonData) =>
  API.post(`course/${courseId}/create_lesson`, lessonData);
const updateLesson = (lessonId, lessonData) =>
  API.put(`${API_URL}/${lessonId}/update`, lessonData);
const deleteLesson = lessonId => API.delete(`${API_URL}/${lessonId}/delete`);

export const lessonService = {
  getLessonsCourse,
  getLessonInfo,
  createLesson,
  updateLesson,
  deleteLesson,
};
