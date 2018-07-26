import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#545453'
    },
    secondary: {
      main: '#191E2E'
    },
    type: 'dark',
  },
  colors: {
    green: '#35c19b',
    orange: '#FF4533',
    red: '#E51339',
  }
});

export default Theme;