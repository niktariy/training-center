import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress, Grid } from '@material-ui/core';
import CourseCard from './CourseCard';

const CourseList = ({ items, isLoading }) => {
  return isLoading ? (
    <CircularProgress size={24} />
  ) : (
    items.map(itemData => (
      <Grid item xs={12} md={6} lg={4} key={itemData.id + itemData.courseName}>
        <CourseCard courseData={itemData} />
      </Grid>
    ))
  );
};

CourseList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      courseName: PropTypes.string.isRequired,
      courseDescription: PropTypes.string.isRequired,
      courseDuration: PropTypes.number.isRequired,
      startDate: PropTypes.any.isRequired,
      category: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool,
};

CourseList.defaultProps = {
  isLoading: false,
};

export default CourseList;
