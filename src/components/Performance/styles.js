import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red",
  },
  table: {
    padding: "2rem"
  },
  subtitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
    color: 'rgba(72, 133, 210, 1)',
  }
}));