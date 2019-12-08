import { coursesService } from '../_services';

export const GET_ALL_COURSES_REQUEST = 'GET_GET_ALL_COURSES_REQUEST';
export const GET_ALL_COURSES_SUCCESS = 'GET_ALL_COURSES_SUCCESS';
export const GET_ALL_COURSES_FAILURE = 'GET_ALL_COURSES_FAILURE';

export const GET_COURSE_BY_ID_REQUEST = 'GET_COURSE_BY_ID_REQUEST';
export const GET_COURSE_BY_ID_SUCCESS = 'GET_COURSE_BY_ID_SUCCESS';
export const GET_COURSE_BY_ID_FAILURE = 'GET_COURSE_BY_ID_FAILURE';

export const ENROLL_COURSE_REQUEST = 'ENROLL_COURSE_REQUEST';
export const ENROLL_COURSE_SUCCESS = 'ENROLL_COURSE_SUCCESS';
export const ENROLL_COURSE_FAILURE = 'ENROLL_COURSE_FAILURE';

export const CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_FAILURE = 'CREATE_COURSE_FAILURE';

export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';

export const getAllCourses = () => dispatch => {
  dispatch({
    type: GET_ALL_COURSES_REQUEST,
  });

  coursesService
    .getAllCourses()
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: {
          courses: data,
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
      dispatch({
        type: GET_COURSE_BY_ID_SUCCESS,
        payload: {
          courseData: data,
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

export const enrollCourse = courseId => dispatch => {
  dispatch({
    type: ENROLL_COURSE_REQUEST,
  });

  coursesService
    .enrollCourse(courseId)
    .then(() => {
      dispatch({
        type: ENROLL_COURSE_SUCCESS,
      });
    })
    .catch(error => {
      dispatch({
        type: ENROLL_COURSE_FAILURE,
        payload: error.message,
      });
    });
};

export const createCourse = courseData => dispatch => {
  dispatch({
    type: CREATE_COURSE_REQUEST,
  });

  coursesService
    .createCourse(courseData)
    .then(() => {
      dispatch({
        type: CREATE_COURSE_SUCCESS,
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_COURSE_FAILURE,
        payload: error.message,
      });
    });
};

export const updateCourse = courseData => dispatch => {
  dispatch({
    type: UPDATE_COURSE_REQUEST,
  });

  coursesService
    .updateCourse(courseData)
    .then(() => {
      dispatch({
        type: UPDATE_COURSE_SUCCESS,
      });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_COURSE_FAILURE,
        payload: error.message,
      });
    });
};
