
import { languageSelect } from "../redux/actions";
import   useStyles        from './boxStyles';

export default function Language({lang}) {
  const { languageBox } = useStyles();
  return (
    <div className={languageBox} onClick={ e => languageSelect(lang) }>
      <span>{ lang.name }</span>
    </div>
  );
}
