
import { makeStyles } from '@material-ui/core/styles';
import AppBar         from '@material-ui/core/AppBar';
import Toolbar        from '@material-ui/core/Toolbar';
import Typography     from '@material-ui/core/Typography';
import SearchField    from './SearchField';
import logo           from '../assets/logo.png';

const useStyles = makeStyles( (theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoImg: {
    top: theme.spacing(1),
    height: `calc( 4em - ${theme.spacing(2)}px )`,
    filter: 'drop-shadow(#0000004d 3px 2px 3px)',
    paddingRight: theme.spacing(1)
  },
  title: {
    display: 'none',
    fontFamily: 'myriad-pro',
    fontSize: '2em',
    filter: 'drop-shadow(#0000004d 3px 2px 3px)',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  offset: theme.mixins.toolbar,
}));

export default function TopBar() {
  const { grow, logoImg, title, offset } = useStyles();

  return <>
    <div className={grow}>
      <AppBar position="fixed">
        <Toolbar>
          <img className={logoImg} src={logo} alt="Deutsche Postcode Lotterie"/>
          <Typography className={title} variant="h6" noWrap>
            Country List
          </Typography>
          <div className={grow} />
          <SearchField/>
        </Toolbar>
      </AppBar>
    </div>
    <div className={offset} />
  </>;
}