import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import {
  DashboardRounded,
  AccountBoxRounded,
  ListAltRounded,
  EventNoteRounded,
} from '@material-ui/icons';

const Navigation = () => {
  const navLinks = [
    {
      icon: <DashboardRounded />,
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      icon: <AccountBoxRounded />,
      name: 'My profile',
      link: '/profile',
    },
    {
      icon: <ListAltRounded />,
      name: 'All courses',
      link: '/courses',
    },
    {
      icon: <EventNoteRounded />,
      name: 'Calendar',
      link: '/calendar',
    },
  ];
  return (
    <List role="navigation" component="nav">
      {navLinks.map(({ icon, name, link }) => (
        <ListItem
          button
          to={link}
          component={NavLink}
          activeClassName="isActive"
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{name}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default Navigation;
