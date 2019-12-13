import React from 'react';
import { Grid, Paper, Box } from '@material-ui/core';
import DashboardArea from '../../components/DashboardArea';
import FormCourseCreator from '../../components/CourseArea/FormCourseCreator';

const CourseCreator = () => {
  return (
    <DashboardArea>
      <Grid container spacing={3}>
        <Paper>
          <Box p={3}>
            <FormCourseCreator />
          </Box>
        </Paper>
      </Grid>
    </DashboardArea>
  );
};

export default CourseCreator;
