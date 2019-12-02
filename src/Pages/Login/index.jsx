import React from 'react';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLoginAction } from '../../_actions/auth.actions';

import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Link,
  Typography,
  Container,
} from '@material-ui/core';

import API from '../../_utils/api';

import Copyright from '../../_components/Copyright';
import { useStyles } from './styles';

const Login = ({userLoginAction}) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onBlur'
  });
  const classes = useStyles();

  const EmailProps = {
    id: 'email',
    label: 'Email Address',
    name: 'username',
    type: 'email',
    autoComplete: 'email',
  };
  const PasswordProps = {
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
  };

  const onSubmit = (values) => {
    // API.post('/login', {username, password})
    userLoginAction(values);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          ui
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            error={errors.email && !!errors.email.message}
            helperText={errors.email && errors.email.message}
            inputProps={EmailProps}
            inputRef={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email address'
              }
            })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={errors.password && !!errors.password.message}
            helperText={errors.password && errors.password.message}
            inputProps={PasswordProps}
            inputRef={register({
              required: 'Required',
              pattern: {
                message: 'At least 8 digits, 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters'
              }
            })}
          />
          <FormControlLabel
            control={<Checkbox
              value="remember"
              name="rememberMe"
              color="primary"
              inputRef={register}
            />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

Login.propTypes = {
  userLoginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  userLoginAction
});

export default connect(null, mapDispatchToProps)(Login);
