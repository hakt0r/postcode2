
import   Language     from "./Language";
import   useStyles    from './boxStyles';

export default function Country({country:{name,emoji,languages}}) {
  const classes = useStyles();
  return (
    <div className={classes.country}>
      <div className={classes.head}>
        <span className={classes.flag}>{emoji}</span>
        <span className={classes.name}>{name}</span>
      </div>
      <div className={classes.languages}>
        { languages.map( lang => <Language key={lang.code} lang={lang}/> ) }
      </div>
    </div>
  );
}
