import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link as RouterLink, useParams } from 'react-router-dom';
import { Breadcrumbs, Grid, Link, CircularProgress } from '@material-ui/core';

import DashboardArea from '../DashboardArea';
import { getCurrentUser, getCourseById, enrollCourse } from '../../_actions';
import { formatCategory } from '../../_utils/stringFormatter';
import { Paper, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const CourseInfo = ({
  courseData,
  currentUserId,
  getCurrentUser,
  getCourseById,
  enrollCourse,
  isLoading,
  isSubscribing,
  isSubscribed,
}) => {
  const classes = useStyles();
  const { courseId } = useParams();
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

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

  useEffect(() => {
    getCurrentUser();
    getCourseById(courseId);
    setSubscribing(isSubscribing);
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
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  disabled={subscribing || isSubscribed}
                  onClick={isSubscribed ? undefined : handleEnrollClick}
                >
                  {isSubscribed ? 'Unsubscribe' : 'Enroll'}
                </Button>
                {subscribing && (
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
      </Grid>
    </DashboardArea>
  );
};

CourseInfo.propTypes = {
  courseData: PropTypes.object.isRequired,
  currentUserId: PropTypes.any.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  getCourseById: PropTypes.func.isRequired,
  enrollCourse: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSubscribing: PropTypes.bool.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
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
    currentUserId
  );

  return {
    currentUserId,
    courseData,
    isSubscribed: isCurrentUserSubscribed || false,
    isLoading: coursesReducer.isGettingCourseProcessing,
    isSubscribing: coursesReducer.isSubscribeProcessing,
  };
};

const mapDispatchToProps = {
  getCurrentUser,
  getCourseById,
  enrollCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseInfo);
