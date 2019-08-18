import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Home';
import * as routes from '../constants/routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.LOGIN}  component={Login}/>
          <Route exact path={routes.SIGNUP}  component={Signup}/>
          <Route exact path={routes.HOME} component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;