import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import * as routes from '../constants/routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.LOGIN}  component={Login}/>
          <Route exact path={routes.SIGNUP}  component={Signup}/>
        </Switch>
      </Router>
    )
  }
}

export default App;