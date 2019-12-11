import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getCurrentUser } from '../../_actions';
import DashboardArea from '../../components/DashboardArea';
import ProfileArea from '../../components/ProfileArea';

const UserProfile = ({ getCurrentUser, userData, userRole, userLoading }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <DashboardArea pageTitle="My profile">
      <Grid container spacing={3}>
        <Grid item xs>
          <ProfileArea user={userData} isLoading={userLoading} />
        </Grid>
      </Grid>
    </DashboardArea>
  );
};

UserProfile.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  userLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const userReducer = state.userReducer;
  const isCurrentUser = userReducer.isCurrentUser;
  const userData = isCurrentUser ? userReducer.currentUser : userReducer.userData;
  const userRole = isCurrentUser ? userReducer.currentUserRole : userReducer.userRole;
  return {
    userData,
    userRole,
    userLoading: userReducer.isRequestProcessing,
  };
};

const mapDispatchToProps = {
  getCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
