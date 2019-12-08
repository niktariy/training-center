import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';

const CourseList = ({ items, isLoading }) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <React.Fragment>
          {items.map(
            ({
              id,
              courseName,
              courseDescription,
              courseDuration,
              startDate,
              courseCategory,
              lector,
            }) => (
              <Grid item xs={12} md={8} lg={9} key={id + courseName}>
                <Paper>
                  <Typography variant="h3" component="h2">
                    {courseName}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {courseDescription}
                  </Typography>
                  <Typography>`${courseDuration} hours`</Typography>
                </Paper>
              </Grid>
            )
          )}
        </React.Fragment>
      )}
    </React.Fragment>
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
      courseCategory: PropTypes.string.isRequired,
      lector: PropTypes.object.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool,
};

CourseList.defaultProps = {
  isLoading: false,
};

export default CourseList;
