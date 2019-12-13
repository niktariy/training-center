import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import DashboardArea from '../../components/DashboardArea';
import FormCourseUpdater from '../../components/CourseArea/FormCourseUpdater';

const CourseUpdater = () => {
  return (
    <DashboardArea>
      <Grid container spacing={3}>
        <Paper>
          <Box p={3}>
            <FormCourseUpdater />
          </Box>
        </Paper>
      </Grid>
    </DashboardArea>
  );
};

export default CourseUpdater;
