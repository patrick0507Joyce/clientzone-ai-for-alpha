import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 1rem',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    marginRight: '15px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30rem',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '15rem',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '15rem',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  link: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  navItem: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
}));