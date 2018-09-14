import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './utils/Theme';
import RyAppBar from './components/AppBar/AppBar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <RyAppBar {...this.props} />
        <Intro/>
        <AboutMe/>
      </MuiThemeProvider>
    );
  }
}

export default App;
