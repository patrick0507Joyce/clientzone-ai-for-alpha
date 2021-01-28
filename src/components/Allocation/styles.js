import { deepOrange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  specialPaper: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1),
    height: '20rem'

  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: deepOrange[500],
  },
  navItem: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    color: 'secondary',  
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30rem',
  },
  table: {
    minWidth: 650,
  },
  tableLegend: {
    maxWidth: 200,
  },
  upCube: {
    color: 'green[500]',
  },
  downCube: {
    color: 'red[700]',
  },
  subtitle: {
    color: 'rgba(72, 133, 210, 1)'
  },
  gridLayout: {
    height: "100%"
  },
  gridContainer: {
    minHeight: "100%"
  }
}));

