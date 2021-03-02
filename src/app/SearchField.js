

import InputBase            from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { MdSearch }         from 'react-icons/md';
import { useSelector }      from 'react-redux';
import { changeSearch }     from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputField: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchField() {
  const classes = useStyles();
  const   value = useSelector( state => state.searchTerm );
  return (
  <div className={classes.search}>
    <div className={classes.searchIcon}>
      <MdSearch />
    </div>
    <InputBase
      value={value} onChange={changeSearch}
      placeholder="Search…"
      classes={{ root:classes.inputRoot, input:classes.inputField }}
    />
  </div> );
}