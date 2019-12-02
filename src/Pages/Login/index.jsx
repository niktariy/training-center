import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { Link as RoterLink } from 'react-router-dom';
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

import Copyright from '../../_components/Copyright';
import { history } from '../../_utils/history';
import { useStyles } from './styles';

const Login = ({ userLoginAction, token }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onBlur',
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

  useEffect(() => {
    // TODO: rewrite with document coockie
    if (sessionStorage.getItem('token') !== null) {
      history.push('/courses');
    }
  });

  const onSubmit = values => {
    userLoginAction(values);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>ui</Avatar>
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
                message: 'invalid email address',
              },
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
                message:
                  'At least 8 digits, 1 uppercase letter, 1 lowercase letter, and 1 number. Can contain special characters',
              },
            })}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                name="rememberMe"
                color="primary"
                inputRef={register}
              />
            }
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
              <Link to={'/register'} variant="body2" component={RoterLink}>
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
};

Login.propTypes = {
  userLoginAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { token: state.authReducer.token };
};

const mapDispatchToProps = {
  userLoginAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
