import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getCurrentUser } from '../../_actions';
import DashboardArea from '../../_components/DashboardArea';
import ProfileArea from '../../_components/ProfileArea';

const UserProfile = ({ getCurrentUser, userData, userLoading }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <DashboardArea pageTitle="My profile">
      <Grid container spacing={3}>
        <Grid item xs>
          <ProfileArea user={userData} isLoading={userLoading} />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </DashboardArea>
  );
};

UserProfile.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  userLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  userData: state.userReducer.userData,
  userLoading: state.userReducer.isRequestProcessing,
});

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
