import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { history } from '../../_utils/history';
import { getAllCourses } from '../../_actions/courses.actions';
import Dashboard from '../../_components/Dashboard';
import CourseList from '../../_components/CourseList';

const Courses = ({ getAllCourses, authToken, courses, coursesLoading }) => {
  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null || authToken === '') {
      history.push('/');
    }
    getAllCourses();
  }, [authToken, getAllCourses]);

  return (
    <Dashboard pageTitle="Courses">
      <Grid container spacing={3}>
        <CourseList items={courses} isLoading={coursesLoading} />
      </Grid>
    </Dashboard>
  );
};

Courses.propTypes = {
  authToken: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    authToken: state.authReducer.authToken,
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
