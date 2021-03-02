
import { makeStyles }            from '@material-ui/core';
import { MdRemoveCircleOutline } from 'react-icons/md';

const useStyles = makeStyles( theme => ({
  loader: {
    width: '90vw',
    maxHeight: '80vh'
  }
}));

export default function Loading() {
  const classes = useStyles();
  return <MdRemoveCircleOutline className={classes.loader}/>;
}
