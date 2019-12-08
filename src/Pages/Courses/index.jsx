import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getAllCourses } from '../../_actions/courses.actions';
import DashboardArea from '../../_components/DashboardArea';
import CourseList from '../../_components/CourseList';

const Courses = ({ getAllCourses, courses, coursesLoading }) => {
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return (
    <DashboardArea pageTitle="Courses">
      <Grid container spacing={3}>
        <CourseList items={courses} isLoading={coursesLoading} />
      </Grid>
    </DashboardArea>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    courses: state.coursesReducer.courses,
    coursesLoading: state.coursesReducer.isRequestProcessing,
  };
};

const mapDispatchToProps = {
  getAllCourses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
