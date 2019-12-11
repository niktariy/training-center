import { teal, orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filterContainer: {
    margin: theme.spacing(0, 1, 1, 1),
    width: '100%',
  },
  btnWrapper: {
    position: 'relative',
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: teal[400],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));
