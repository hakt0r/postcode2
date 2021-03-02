
import { useSelector }  from "react-redux";
import AppBar           from '@material-ui/core/AppBar';
import Toolbar          from '@material-ui/core/Toolbar';
import SelectedLanguage from './SelectedLanguage';
import TranslateButton  from './TranslateButton';
import useStyles        from './boxStyles';

export default function Translate() {
  const { bar, offset } = useStyles();
  const languages = useSelector( ({languages}) => languages );
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
