
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0020',
    },
    secondary: {
      main: '#1d9400',
      dark: '#125e00'
    },
    success: {
      main: '#0067b3'
    },
    warning: {
      main: '#f58d06'
    }
  },
});

export default theme;