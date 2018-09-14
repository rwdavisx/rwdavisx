import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './utils/Theme';
import RyAppBar from './components/AppBar/AppBar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';
import Construction from './components/Construction/Construction';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme} className="App">
        <RyAppBar/>
        <Intro/>
        <AboutMe/>
        <Construction/>
      </MuiThemeProvider>
    );
  }
}

export default App;
