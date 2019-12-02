import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const CourseList = ({ items }) => {
  return (
    <Grid container spacing={3}>
      {items &&
        items.map(({ id, name, color, pantone_value }) => (
          <Grid item xs={12} md={8} lg={9}>
            <Paper>
              <Typography>{(id, name, color)}</Typography>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

export default CourseList;
