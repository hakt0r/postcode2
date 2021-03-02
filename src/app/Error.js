
import { makeStyles }            from '@material-ui/core';
import { MdRemoveCircleOutline } from 'react-icons/md';

const useStyles = makeStyles( theme => ({
  center: {
    textAlign: 'center'
  },
  loader: {
    width: '90vw',
    height: '90vh',
    fill: theme.palette.primary.main,
    maxHeight: 'calc( 90vh - 56px )', 
      maxWidth: 'calc( 90vh - 56px )', 
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      maxHeight: 'calc( 90vh - 48px )', 
      maxWidth: 'calc( 90vh - 48px )', 
    }, 
    [theme.breakpoints.up('sm')]: { 
      maxHeight: 'calc( 90vh - 64px )', 
      maxWidth: 'calc( 90vh - 64px )', 
    }
  }
}));

export default function Loading() {
  const classes = useStyles();
  return <div className={classes.center}>
    <MdRemoveCircleOutline color="primary" className={classes.loader}/>
  </div>;
}
