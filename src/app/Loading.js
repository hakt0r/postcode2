
import { makeStyles }   from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles( theme => ({
  loader: {
    "& > svg": {
      color: theme.palette.success.main
    }
  },
  center: {
    width: '90vw',
    height: '90vh',
    position: 'relative',
    left:'50vw',
    top:'1vh',
    overflow: 'hidden',
    maxHeight: 'calc( 90vh - 56px )', 
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      maxHeight: 'calc( 90vh - 48px )', 
    }, 
    [theme.breakpoints.up('sm')]: { 
      maxHeight: 'calc( 90vh - 64px )', 
    },
    transform: 'translate(-50%)',
    textAlign: 'center',
    "& > div": {
      position: 'relative',
      maxHeight: 'calc( 90vh - 56px )', 
      maxWidth: 'calc( 90vh - 56px )', 
      [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
        maxHeight: 'calc( 90vh - 48px )', 
        maxWidth: 'calc( 90vh - 48px )', 
      }, 
      [theme.breakpoints.up('sm')]: { 
        maxHeight: 'calc( 90vh - 64px )', 
        maxWidth: 'calc( 90vh - 64px )', 
      },
      opacity: '0.5'
    },
    "& > div > svg": {

    }
  }
}));

export default function Loading() {
  const classes = useStyles();
  return <div className={classes.center}>
    <CircularProgress size="inherit" className={classes.loader}/>
  </div>;
}
