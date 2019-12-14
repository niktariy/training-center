import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Breadcrumbs,
  Link,
  Typography,
  Paper,
  Box,
} from '@material-ui/core';

import DashboardArea from '../../components/DashboardArea';
import FormCourseCreator from '../../components/CourseArea/FormCourseCreator';

const CourseCreator = () => {
  return (
    <DashboardArea>
      <Grid item xs={12}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/courses" component={NavLink}>
            {'All Courses'}
          </Link>
          <Typography color="textSecondary">{'Course creating'}</Typography>
        </Breadcrumbs>
      </Grid>
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
