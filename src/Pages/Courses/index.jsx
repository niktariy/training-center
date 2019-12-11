import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { getAllCourses } from '../../_actions/courses.actions';
import DashboardArea from '../../components/DashboardArea';
import CourseArea from '../../components/CourseArea';

const Courses = ({ getAllCourses, courses, coursesLoading }) => {
  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return (
    <DashboardArea>
      <Grid container spacing={3}>
        <CourseArea items={courses} isLoading={coursesLoading} />
      </Grid>
    </DashboardArea>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  getAllCourses: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses,
  coursesLoading: state.coursesReducer.isRequestProcessing,
});

const mapDispatchToProps = {
  getAllCourses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
