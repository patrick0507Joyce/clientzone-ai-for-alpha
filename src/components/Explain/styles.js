import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: deepPurple[500],
  },
  navItem: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    color: 'secondary',  
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50rem',
  },
  image: {
    marginRight: '4rem',
  }
}));

