import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dashboard from '../../_components/Dashboard';

const Courses = () => {
  return (
    <Dashboard>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper >
        {/* className={fixedHeightPaper} */}
            //
            раз
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            {/* className={fixedHeightPaper} */}
            два
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>
            {/* className={classes.paper} */}
            три
          </Paper>
        </Grid>
      </Grid>
    </Dashboard>
  )
};

export default Courses;
