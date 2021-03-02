
import { useSelector } from 'react-redux';
import   useStyles     from './boxStyles';

export default function TranslateButton({lang}) {
  const { box, blue } = useStyles();
  const [ first, second ] = useSelector( ({languages}) => languages );
  return (
    <div 
      className={`${box} ${blue}`}
      onClick={
        e => window.open(`https://translate.google.com/?sl=${first.code}&tl=${second.code}&op=translate`)
    }>
      <span>Translate</span>
    </div>
  );
}
