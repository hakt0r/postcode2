
import { makeStyles }     from "@material-ui/core";
import { languageSelect } from "../redux/actions";

const useStyles = makeStyles( theme => ({
  box: {
    flexGrow:      1,
    cursor:        'pointer',
    userSelect:    'none',
    background:    theme.palette.secondary.main,
    color:         'white',
    textAlign:     'center',
    marginRight:   theme.spacing(1),
    paddingBlock:  theme.spacing(0.5),
    paddingInline: theme.spacing(1.5),
    borderRadius:  theme.spacing(0.5),
    whiteSpace:    'pre',

    "&.selected": {
      background: 'blue'
    },
    "&:last-of-type": {
      marginRight: 'unset'
    },
    "&:hover": {
      background: theme.palette.secondary.dark,
    },
    "&:active": {
      boxShadow: 'inset black 1px 1px 1px',
      '& > span': {
        position: 'relative',
        top: '1px',
        left: '1px'
      }
    }
  }
}));

export default function Language({lang}) {
  const { box } = useStyles();
  return (
    <div className={box} onClick={ e => languageSelect(lang) }>
      <span>{ lang.name }</span>
    </div>
  );
}
