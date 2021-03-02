
import useStyles from './boxStyles';
import clouds    from '../assets/bg-clouds.jpg';

export default function Main() {
  const classes = useStyles();
  return <>
    <img alt="" src={clouds} className={classes.background}/>
    <div className={classes.backgroundGradient}></div>
  </>;
};

