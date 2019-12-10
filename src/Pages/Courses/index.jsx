import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getAllCourses } from '../../_actions/courses.actions';
import DashboardArea from '../../_components/DashboardArea';
import CourseList from '../../_components/CourseList';
import CourseInfo from '../../_components/CourseInfo';

const Courses = ({ getAllCourses, courses, coursesLoading }) => {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return (
    <DashboardArea pageTitle="Courses">
      <Grid container spacing={3}>
        <Switch>
          <Route exact path={path}>
            <CourseList items={courses} isLoading={coursesLoading} />
          </Route>
          <Route path={`${path}/:courseId`}>
            <CourseInfo />
          </Route>
        </Switch>
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
