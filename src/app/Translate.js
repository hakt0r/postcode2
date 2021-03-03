
import { useSelector }    from "react-redux";
import { IconButton, makeStyles }     from "@material-ui/core";
import { languageSwap }   from "../redux/actions";
import { MdSwapHoriz }    from "react-icons/md";
import   AppBar           from '@material-ui/core/AppBar';
import   Toolbar          from '@material-ui/core/Toolbar';
import   SelectedLanguage from './SelectedLanguage';
import   TranslateButton  from './TranslateButton';

const useStyles = makeStyles( theme => ({
  offset: theme.mixins.toolbar,
  bar: {
    top: 'auto',
    bottom: 0,
    background: '#f58d06'
  },
  swapButton: {
    marginRight: theme.spacing(1)
  },
  swap: {
    fontSize: '2em',
  }
}));


export default function Translate() {
  const { bar, offset, swap, swapButton } = useStyles();
  const languages = useSelector( ({languages}) => languages );
  if ( ! languages.length ) return null;
  return <>
  <div className={offset} />
  <AppBar position="fixed" className={bar}>
    <Toolbar>
    { languages[0] ? <SelectedLanguage lang={languages[0]}/> : null }
    { languages[1] ? <>
      <IconButton className={swapButton} onClick={e=>languageSwap()}>
        <MdSwapHoriz color="white" className={swap}/>
      </IconButton>
      <SelectedLanguage lang={languages[1]}/>
    </> : null }
    <TranslateButton/>
    </Toolbar>
  </AppBar>
</>;
}
