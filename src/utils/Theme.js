import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4f4f4e'
    },
    secondary: {
      main: '#191E2E'
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF'
    },
    type: 'light',
  },
  colors: {
    navy: '#191E2E',
    green: '#35c19b',
    orange: '#FF4533',
    red: '#E51339',
    white: '#FFFFFF'
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif"
  }
});

export default Theme;