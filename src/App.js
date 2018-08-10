import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './utils/Theme';
import RyAppBar from './components/AppBar/AppBar';
import WelcomeBox from './components/WelcomeBox/WelcomeBox';
import Intro from './components/Intro/Intro';
import RwdLogo from './svg/RwdLogo';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme} className="App">
        <RyAppBar/>
        <Intro/>
      </MuiThemeProvider>
    );
  }
}

export default App;
