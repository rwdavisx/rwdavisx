import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './App';
import Callback from './components/Auth/Callback';
import Auth from './services/Auth';
import history from './history';
const auth = new Auth();

const handleAuthentication = ({location}) => {
  console.log(location);
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      </div>
    </Router>
  );
};