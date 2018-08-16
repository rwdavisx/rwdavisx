import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#373737'
    },
    secondary: {
      main: '#35c19b'
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    },
    type: 'light',
    background: {
      paper: '#373737',
      default: '#FFFFFF'
    }
  },
  colors: {
    orange: '#FF4533',
    red: '#E51339',
    white: '#FFFFFF'
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
});

export default Theme;