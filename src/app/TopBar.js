
import AppBar      from '@material-ui/core/AppBar';
import Toolbar     from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import SearchField from './SearchField';
import logo        from '../assets/logo.png';
import useStyles   from './boxStyles';
import { makeStyles } from '@material-ui/core';

const useLocalStyles = makeStyles( theme => ({
  title: {
    display: 'none',
    fontFamily: 'myriad-pro',
    fontSize: '2em',
    filter: 'drop-shadow(#0000004d 3px 2px 3px)',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}));

export default function TopBar() {
  const { grow, logoImg, offset } = useStyles();
  const { title } = useLocalStyles();

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