import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem } from '@material-ui/core';

class Home extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="xl">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Welcome to Training Center
        </Typography>
        <List>
          <ListItem>
            <Link to={'/'}>Home</Link>
          </ListItem>
          <ListItem>
            <Link to={'/Login'}>Login</Link>
          </ListItem>
          <ListItem>
            <Link to={'/Register'}>Register</Link>
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default Home;
