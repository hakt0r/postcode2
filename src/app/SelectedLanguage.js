
import { MdRemoveCircle } from 'react-icons/md';
import { languageRemove } from "../redux/actions";
import   useStyles        from './boxStyles';

export default function SelectedLanguage({lang}) {
  const { box } = useStyles();
  return (
    <div className={box} onClick={ e => languageRemove(lang) }>
      <span>{ lang.name }</span>
      <MdRemoveCircle/>
    </div>
  );
}
