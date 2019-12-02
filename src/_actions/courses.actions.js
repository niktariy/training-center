import { coursesService } from '../_services';

export const ALL_COURSES_REQUEST = 'ALL_COURSES_REQUEST';
export const ALL_COURSES_SUCCESS = 'ALL_COURSES_SUCCESS';
export const ALL_COURSES_FAILURE = 'ALL_COURSES_FAILURE';

export const COURSE_BY_ID_REQUEST = 'COURSE_BY_ID_REQUEST';
export const COURSE_BY_ID_SUCCESS = 'COURSE_BY_ID_SUCCESS';
export const COURSE_BY_ID_FAILURE = 'COURSE_BY_ID_FAILURE';

export const getAllCourses = () => dispatch => {
  dispatch({
    type: ALL_COURSES_REQUEST,
  });

  coursesService
    .getFakeAllCourses()
    .then(({ data }) => {
      console.log('action', data.data);
      dispatch({
        type: ALL_COURSES_SUCCESS,
        payload: {
          courses: data.data,
        },
      });
    })
    .catch(error => {
      dispatch({
        type: ALL_COURSES_FAILURE,
        payload: error.message,
      });
    });
};
