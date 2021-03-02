
import { makeStyles } from "@material-ui/core";

export default makeStyles( theme => ({
  blue: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark  
    }
  },
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
    display:       'flex',
    alignItems:    'center',
    justifyContent:'center',
    fontSize: '1.3rem',
    lineHeight: '1.6rem',

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
    },
    "& > span": {
      fontSize: '1.3rem',
      lineHeight: '1.6rem',
      marginRight: '0.5ch'
    }
  },
  country: {
    backgroundColor: 'white',
    width: '50ch',
    borderRadius: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    filter: "drop-shadow(#0000004d 1px 1px 1px)",
    "&:first-of-type":{
      marginTop: theme.spacing(1)
    }
  },
  head: {
    display: 'flex',
    paddingBlock: theme.spacing(0.5),
    paddingInline: theme.spacing(1.5),
    fontSize: '1.5rem',
    backgroundColor: theme.palette.success.main,
    maxHeight: '1.8em',
    overflow: 'hidden'
  },
  flag: {
    filter: "drop-shadow(black 0px 0px 1px)"
  },
  name: {
    marginLeft: '0.5ch',
    color: "white",
    filter: "drop-shadow(black 1px 1px 0px)"
  },
  languages: {
    display: 'flex',
    margin: theme.spacing(1),
    background: 'white',
    overflow: 'hidden',
    borderRadius: theme.spacing(0.5)
  }
}));
