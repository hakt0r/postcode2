
import { MdRemoveCircleOutline } from 'react-icons/md';
import   useStyles               from './boxStyles';

export default function Loading() {
  const classes = useStyles();
  return <div className={classes.centerError}>
    <MdRemoveCircleOutline color="primary" className={classes.error}/>
  </div>;
}
