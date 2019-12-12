import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link as RouterLink, useParams } from 'react-router-dom';
import { Breadcrumbs, Grid, Link, CircularProgress } from '@material-ui/core';

import DashboardArea from '../DashboardArea';
import {
  getCurrentUser,
  getCourseById,
  enrollCourse,
  leaveCourse,
} from '../../_actions';
import { Paper, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const CourseInfo = ({
  courseData,
  currentUserId,
  getCurrentUser,
  getCourseById,
  enrollCourse,
  leaveCourse,
  isLoading,
  isSubscribing,
  isSubscribed,
  errorMessage
}) => {
  const classes = useStyles();
  const { courseId } = useParams();
  const [processing, setProcessing] = useState(false);

  const {
    id,
    courseName,
    courseDescription,
    courseDuration,
    startDate,
    category,
    lecturerId,
    listeners,
  } = courseData;

  const handleEnrollClick = () => {
    enrollCourse(id);
  };

  const handleLeaveClick = () => {
    leaveCourse(id);
  };

  useEffect(() => {
    if (!!currentUserId.length) {
      getCurrentUser();
    }
    getCourseById(courseId);

    return () => {
      setProcessing(isSubscribing);
    };
  }, [
    courseId,
    currentUserId,
    getCourseById,
    getCurrentUser,
    isSubscribed,
    isSubscribing,
  ]);

  return (
    <DashboardArea>
      <Grid container spacing={3}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/courses" component={RouterLink}>
            Courses
          </Link>
          <Link
            color="inherit"
            to={`/courses/${courseId}`}
            component={RouterLink}
          >
            {courseName}
          </Link>
        </Breadcrumbs>
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <Paper>
            <Typography gutterBottom variant="h4" component="h2">
              {courseName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {courseDescription}
            </Typography>
            <Typography>{courseDuration} hours</Typography>
            <Typography>{category}</Typography>
            <Typography>{startDate}</Typography>
            <Typography>{lecturerId}</Typography>
            {listeners.map(listener => (
              <Typography key={listener.id + 'a'}>
                {listener.firstName}
              </Typography>
            ))}
            {lecturerId !== currentUserId &&
            new Date(startDate).getTime() > new Date().getTime() ? (
              <div className={classes.btnWrapper}>
                {isSubscribed ? 'Changed your mind?' : null}
                <Button
                  size="large"
                  variant={isSubscribed ? 'outlined' : 'contained'}
                  color="primary"
                  disabled={processing}
                  onClick={isSubscribed ? handleLeaveClick : handleEnrollClick}
                >
                  {isSubscribed ? 'Unsubscribe' : 'Enroll'}
                </Button>
                {processing && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            ) : (
              ''
            )}
          </Paper>
        )}
        {errorMessage}
      </Grid>
    </DashboardArea>
  );
};

CourseInfo.propTypes = {
  courseData: PropTypes.object.isRequired,
  currentUserId: PropTypes.any.isRequired,

  isLoading: PropTypes.bool.isRequired,
  isSubscribing: PropTypes.bool.isRequired,
  isSubscribed: PropTypes.bool.isRequired,

  getCurrentUser: PropTypes.func.isRequired,
  getCourseById: PropTypes.func.isRequired,
  enrollCourse: PropTypes.func.isRequired,
  leaveCourse: PropTypes.func.isRequired,

  errorMessage: PropTypes.any
};

const mapStateToProps = state => {
  const coursesReducer = state.coursesReducer;
  const currentUserId = state.userReducer.currentUserId;
  const courseData = coursesReducer.singleCourseData;

  function findUserInListeners(listeners, userId) {
    if (!listeners.length && !userId) {
      return;
    }
    const res = listeners.find(item => item.id === userId);
    return res !== undefined ? !!Object.keys(res).length : false;
  }

  const isCurrentUserSubscribed = findUserInListeners(
    courseData.listeners,
    currentUserId,
  );

  return {
    currentUserId,
    courseData,
    isSubscribed: isCurrentUserSubscribed || false,
    isLoading: coursesReducer.isGettingCourseProcessing,
    isSubscribing: coursesReducer.isSubscribeProcessing,
    errorMessage: coursesReducer.errorMessage,
  };
};

const mapDispatchToProps = {
  getCurrentUser,
  getCourseById,
  enrollCourse,
  leaveCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseInfo);
