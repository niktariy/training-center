import { coursesService } from '../_services';
import { getCurrentUser } from './user.actions';

const uniqueImagePlaceholder = id =>
  `https://picsum.photos/id/100${id}/600/500?blur`;

export const GET_ALL_COURSES_REQUEST = 'GET_ALL_COURSES_REQUEST';
export const GET_ALL_COURSES_SUCCESS = 'GET_ALL_COURSES_SUCCESS';
export const GET_ALL_COURSES_FAILURE = 'GET_ALL_COURSES_FAILURE';

export const GET_COURSE_BY_ID_REQUEST = 'GET_COURSE_BY_ID_REQUEST';
export const GET_COURSE_BY_ID_SUCCESS = 'GET_COURSE_BY_ID_SUCCESS';
export const GET_COURSE_BY_ID_FAILURE = 'GET_COURSE_BY_ID_FAILURE';

export const ENROLL_COURSE_REQUEST = 'ENROLL_COURSE_REQUEST';
export const ENROLL_COURSE_SUCCESS = 'ENROLL_COURSE_SUCCESS';
export const ENROLL_COURSE_FAILURE = 'ENROLL_COURSE_FAILURE';

export const LEAVE_COURSE_REQUEST = 'LEAVE_COURSE_REQUEST';
export const LEAVE_COURSE_SUCCESS = 'LEAVE_COURSE_SUCCESS';
export const LEAVE_COURSE_FAILURE = 'LEAVE_COURSE_FAILURE';

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
    .then(res => {
      dispatch({
        type: GET_ALL_COURSES_SUCCESS,
        payload: {
          courses: res.data.map(item => ({
            ...item,
            imageUrl: uniqueImagePlaceholder(item.id),
          })),
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
    .then(res => {
      dispatch({
        type: GET_COURSE_BY_ID_SUCCESS,
        payload: {
          courseData: res.data,
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

export const leaveCourse = courseId => dispatch => {
  dispatch({
    type: LEAVE_COURSE_REQUEST,
  });

  coursesService
    .leaveCourse(courseId)
    .then(() => {
      dispatch({
        type: LEAVE_COURSE_SUCCESS,
      });
    })
    .catch(error => {
      dispatch({
        type: LEAVE_COURSE_FAILURE,
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

export const findUserInListeners = (listeners, userId) => {
  if (!listeners.length && !userId) {
    return;
  }
  const res = listeners.find(item => item.id === userId);
  return res !== undefined ? !!Object.keys(res).length : false;
};
