
import { useSelector }  from "react-redux";

import { makeStyles }   from '@material-ui/core/styles';
import AppBar           from '@material-ui/core/AppBar';
import Toolbar          from '@material-ui/core/Toolbar';
import SelectedLanguage from './SelectedLanguage';
import TranslateButton  from './TranslateButton';

const useStyles = makeStyles( (theme) => ({
  grow: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  bar: {
    top: 'auto',
    bottom: 0
  }
}));

export default function Translate() {
  const { grow, bar, offset } = useStyles();
  const languages = useSelector( ({languages}) => languages );
  console.log(languages)
  if ( ! languages.length ) return null;
  return <>
  <div className={offset} />
  <AppBar position="fixed" className={bar}>
    <Toolbar>
    { languages.map( lang => <SelectedLanguage key={lang.code} lang={lang}/> ) }
    <TranslateButton/>
    </Toolbar>
  </AppBar>
</>;
}
