import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import RyAppBar from './components/AppBar/AppBar';
import Theme from './utils/Theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme} className="App">
          <RyAppBar/>
      </MuiThemeProvider>
    );
  }
}

export default App;
