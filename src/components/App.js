import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login'
import * as routes from '../constants/routes'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.LOGIN}  component={Login}/>
        </Switch>
      </Router>
    )
  }
}

export default App;