import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Breadcrumbs,
  Grid,
  Link,
  CircularProgress,
  Box,
} from '@material-ui/core';

import { formatCategory } from '../../_utils/stringFormatter';
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
  currentUserId,
  courseData,
  isLoading,
  isSubscribing,
  isSubscribed,
  getCurrentUser,
  getCourseById,
  enrollCourse,
  leaveCourse,
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
    if (!currentUserId.length) {
      getCurrentUser();
    }
    if (!courseData.id.length) {
      getCourseById(courseId);
    }
    return () => {
      setProcessing(isSubscribing);
    };
  }, [
    courseData.id.length,
    currentUserId.length,
    courseId,
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
        {isLoading && !id.length ? (
          <CircularProgress size={24} />
        ) : (
          <Paper>
            <Box p={3}>
              <Typography gutterBottom variant="h4" component="h2">
                {courseName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {courseDescription}
              </Typography>
              {courseDuration && (
                <Typography>{courseDuration} hours</Typography>
              )}
              <Typography>{formatCategory(category)}</Typography>
              <Typography>{startDate}</Typography>

              {listeners.map(listener => (
                <Typography key={listener.id + 'a'}>
                  {listener.firstName}
                </Typography>
              ))}
              {new Date(startDate).getTime() > new Date().getTime() ? (
                lecturerId === currentUserId ? (
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    to={`/course/edit/${courseId}`}
                    disabled={processing}
                    component={RouterLink}
                  >
                    {'Edit course'}
                  </Button>
                ) : (
                  <div className={classes.btnWrapper}>
                    {isSubscribed ? 'Changed your mind?' : null}
                    <Button
                      size="large"
                      variant={isSubscribed ? 'outlined' : 'contained'}
                      color="secondary"
                      disabled={processing}
                      onClick={
                        isSubscribed ? handleLeaveClick : handleEnrollClick
                      }
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
                )
              ) : (
                'Course is already started or ended'
              )}
            </Box>
          </Paper>
        )}
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
    isLoading: coursesReducer.isGettingCourseProcessing,
    isSubscribing: coursesReducer.isSubscribeProcessing,
    isSubscribed: isCurrentUserSubscribed || false,
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
  mapDispatchToProps
)(CourseInfo);
