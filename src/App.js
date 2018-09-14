import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './utils/Theme';
import RyAppBar from './components/AppBar/AppBar';
import Intro from './components/Intro/Intro';
import AboutMe from './components/AboutMe/AboutMe';

const App = props => {
  return (
    <MuiThemeProvider theme={Theme}>
      <RyAppBar {...props} />
      <Intro {...props}/>
      <AboutMe/>
    </MuiThemeProvider>
  );
};

export default App;
