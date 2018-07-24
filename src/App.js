import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import RyAppBar from './components/AppBar/AppBar';
import InfoCard from './components/InfoCard';
import {teal, amber, grey} from '@material-ui/core/colors/'
import 'typeface-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#545453'
    },
    secondary: {
      main: '#191E2E'
    },
    text: {
      primary: '#FFFFFF'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} className="App">
          <RyAppBar/>
      </MuiThemeProvider>
    );
  }
}

export default App;
