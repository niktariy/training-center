import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourseById, enrollCourse } from '../../_actions';
import { formatCategory } from '../../_utils/stringFormatter';
import { Paper, Button, Typography } from '@material-ui/core';

const CourseInfo = ({
  courseData,
  currentUserId,
  getCourseById,
  enrollCourse,
}) => {
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
    enrollCourse(id);
  };

  return (
    <Paper>
      <Typography gutterBottom variant="h3" component="h2">
        {courseName}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {courseDescription}
      </Typography>
      <Typography>{courseDuration} hours</Typography>
      <Typography>{formatCategory(category)}</Typography>
      <Typography>{startDate}</Typography>
      <Button
        size="big"
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        {'Enroll'}
      </Button>
      <Button color="primary">{'Learn More'}</Button>
    </Paper>
  );
};

CourseInfo.propTypes = {
  courseData: PropTypes.object.isRequired,
  currentUserId: PropTypes.any.isRequired,
  getCourseById: PropTypes.func.isRequired,
  enrollCourse: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  courseData: state.coursesReducer.singleCourseData,
  currentUserId: state.userReducer.currentUserId,
});

const mapDispatchToProps = {
  getCourseById,
  enrollCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseInfo);
