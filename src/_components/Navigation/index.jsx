import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Navigation = () => {
  return (
    <List role="navigation" component="nav">
      <ListItem
        button
        to={'/profile'}
        component={NavLink}
        activeClassName="isActive"
      >
        <ListItemText>My Profile</ListItemText>
      </ListItem>
      <ListItem
        button
        to={'/courses'}
        component={NavLink}
        activeClassName="isActive"
      >
        <ListItemText>All Courses</ListItemText>
      </ListItem>
    </List>
  );
};

export default Navigation;
