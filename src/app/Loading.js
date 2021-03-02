
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles        from './boxStyles';

export default function Loading() {
  const classes = useStyles();
  return <div className={classes.centerLoader}>
    <CircularProgress size="inherit" className={classes.loader}/>
  </div>;
}
