import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CircularProgress, ButtonGroup, Button, Grid } from '@material-ui/core';
import CourseCard from './CourseCard';
import { categories } from '../../constants/categories';
import { useStyles } from './styles';

const CourseList = ({ items, isLoading }) => {
  const [filterProperty, setFilterProperty] = useState('');
  const [courses, setCourses] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setCourses(items);
  }, [items]);

  const filterOptions = categories;

  const handleClick = event => {};

  return isLoading ? (
    <CircularProgress size={24} />
  ) : (
    <>
      <div className={classes.filterContainer}>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          aria-label="select courses by category"
        >
          <Button id="all_courses" onClick={() => setCourses(items)}>
            All
          </Button>
          {filterOptions.map(({ key, name }) => (
            <Button
              key={key}
              id={key}
              onClick={() =>
                setCourses(items.filter(item => item.category === key))
              }
            >
              {name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {courses.map(itemData => (
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          key={itemData.id + itemData.courseName}
        >
          <CourseCard courseData={itemData} />
        </Grid>
      ))}
    </>
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
