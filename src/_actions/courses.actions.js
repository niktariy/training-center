import { coursesService } from '../_services';

export const GET_ALL_COURSES_REQUEST = 'GET_GET_ALL_COURSES_REQUEST';
export const GET_ALL_COURSES_SUCCESS = 'GET_ALL_COURSES_SUCCESS';
export const GET_ALL_COURSES_FAILURE = 'GET_ALL_COURSES_FAILURE';

export const GET_COURSE_BY_ID_REQUEST = 'GET_COURSE_BY_ID_REQUEST';
export const GET_COURSE_BY_ID_SUCCESS = 'GET_COURSE_BY_ID_SUCCESS';
export const GET_COURSE_BY_ID_FAILURE = 'GET_COURSE_BY_ID_FAILURE';

export const getAllCourses = () => dispatch => {
  dispatch({
    type: GET_ALL_COURSES_REQUEST,
  });

  coursesService
    .getAllCourses()
    .then(({ data }) => {
      console.log('action', data.data);
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: {
          courses: data.data,
        },
      });
    })
    .catch(error => {
      dispatch({
        type: GET_ALL_COURSES_FAILURE,
        payload: error.message,
      });
    });
};

export const getCourseById = courseId => dispatch => {
  dispatch({
    type: GET_COURSE_BY_ID_REQUEST,
  });

  coursesService
    .getCourseById(courseId)
    .then(({ data }) => {
      console.log('action', data.data);
      dispatch({
        type: GET_COURSE_BY_ID_SUCCESS,
        payload: {
          courses: data.data,
        },
      });
    })
    .catch(error => {
      dispatch({
        type: GET_COURSE_BY_ID_FAILURE,
        payload: error.message,
      });
    });
};
