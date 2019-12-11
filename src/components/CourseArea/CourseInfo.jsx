import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useParams } from 'react-router-dom';
import DashboardArea from '../DashboardArea';
import { Breadcrumbs, Grid, Link, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { getCourseById, enrollCourse } from '../../_actions';
import { formatCategory } from '../../_utils/stringFormatter';
import { Paper, Button, Typography } from '@material-ui/core';

const CourseInfo = ({ courseData, getCourseById, enrollCourse, isLoading }) => {
  const { courseId } = useParams();

  useEffect(() => {
    getCourseById(courseId);
  }, [courseId, getCourseById]);

  const {
    id,
    courseName,
    courseDescription,
    courseDuration,
    startDate,
    category,
  } = courseData;

  const handleClick = () => {
    debugger
    enrollCourse(id);
  };

  return (
    <DashboardArea>
      <Grid container spacing={3}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/courses" component={RouterLink}>
            Courses
          </Link>
          <Link color="inherit" to={`/courses/${courseId}`} component={RouterLink}>
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
            <Typography>{() => formatCategory(category)}</Typography>
            <Typography>{startDate}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClick}
            >
              {'Enroll'}
            </Button>
          </Paper>
        )}
      </Grid>
    </DashboardArea>
  );
};

CourseInfo.propTypes = {
  courseData: PropTypes.object.isRequired,
  currentUserId: PropTypes.any.isRequired,
  getCourseById: PropTypes.func.isRequired,
  enrollCourse: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  courseData: state.coursesReducer.singleCourseData,
  currentUserId: state.userReducer.currentUserId,
  isLoading: state.coursesReducer.isGettingCourseProcessing
});

const mapDispatchToProps = {
  getCourseById,
  enrollCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseInfo);
