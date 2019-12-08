import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { history } from '../../_utils/history';
import { getCurrentUser } from '../../_actions';
import DashboardArea from '../../_components/DashboardArea';
import ProfileArea from '../../_components/ProfileArea';
// import UserCourseList from '../../_components/UserCourseList';

const UserProfile = ({ authToken, getCurrentUser, userData, userLoading }) => {
  useEffect(() => {
    if (sessionStorage.getItem('authToken') === null || authToken === '') {
      history.push('/');
    }
    getCurrentUser();
  }, [authToken, getCurrentUser]);

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
  authToken: PropTypes.string.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  userLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authToken: state.authReducer.authToken,
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
