import Api from '../api/config';

const API_URL = 'lesson';

const getLessonsCourse = courseId => Api().get(`course/${courseId}/lessons`);

const getLessonInfo = lessonId => Api().get(`${API_URL}/${lessonId}`);

const createLesson = (courseId, lessonData) =>
  Api().post(`course/${courseId}/create_lesson`, lessonData);
const updateLesson = (lessonId, lessonData) =>
  Api().put(`${API_URL}/${lessonId}/update`, lessonData);
const deleteLesson = lessonId => Api().delete(`${API_URL}/${lessonId}/delete`);

export const lessonService = {
  getLessonsCourse,
  getLessonInfo,
  createLesson,
  updateLesson,
  deleteLesson,
};
