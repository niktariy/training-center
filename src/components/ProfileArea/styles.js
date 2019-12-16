import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  userInfoBlock: {
    padding: theme.spacing(2),
  },
  userHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 2, 3),
  },
  userAvatar: {
    width: 60,
    height: 60,
    margin: theme.spacing(0, 1, 1),
  },
  userLinks: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3, 2, 1),
  },
  userLink: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      marginRight: theme.spacing(2),
    },
  },
}));
