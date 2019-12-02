import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link as RoterLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { history } from '../../_utils/history';
import { getAllCourses } from '../../_actions/courses.actions';
import Dashboard from '../../_components/Dashboard';
import CourseList from '../../_components/CourseList';

const Courses = ({ getAllCourses, token, courses }) => {
  const [courseList, setCourseList] = useState(courses);
  useEffect(() => {
    if (sessionStorage.getItem('token') === null || token === '') {
      history.push('/');
    }
    getAllCourses();
  }, [getAllCourses, token]);

  console.log(courseList);

  return (
    <Dashboard pageTitle="Courses">
      <Grid container spacing={3}>
        <CourseList items={courseList} />
      </Grid>
    </Dashboard>
  );
};

Courses.propTypes = {
  token: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    courses: state.coursesReducer.courses,
  };
};

const mapDispatchToProps = {
  getAllCourses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
