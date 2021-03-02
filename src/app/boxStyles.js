
import { fade, makeStyles } from "@material-ui/core";

const fillScreen = {
  position: 'fixed', top:0, left: 0, width: '100vw', height: '100vh',
};

export default makeStyles( theme => ({
  background: {
    ...fillScreen,
    opacity: 0.3,
    filter: 'blur(5px)'
  },
  backgroundGradient: {
    ...fillScreen,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 65%)'
  },

  blue: {
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark  
    }
  },

  countries: {
    display:'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: '1em'
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
  },

  languageBox: {
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
  },

  loader: {
    "& > svg": {
      color: theme.palette.success.main
    }
  },
  centerLoader: {
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
  },

  centerError: {
    textAlign: 'centerError'
  },

  error: {
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
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputField: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  grow: {
    flexGrow: 1,
  },

  logoImg: {
    top: theme.spacing(1),
    height: `calc( 4em - ${theme.spacing(2)}px )`,
    filter: 'drop-shadow(#0000004d 3px 2px 3px)',
    paddingRight: theme.spacing(1)
  },

  title: {
    display: 'none',
    fontFamily: 'myriad-pro',
    fontSize: '2em',
    filter: 'drop-shadow(#0000004d 3px 2px 3px)',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  offset: theme.mixins.toolbar,

  bar: {
    top: 'auto',
    bottom: 0
  }

}));
