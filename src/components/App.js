import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Home';
import Month from './Month';
import * as routes from '../constants/routes';
import Navbar from './Navbar'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={routes.LOGIN}  component={Login}/>
        <Route exact path={routes.SIGNUP}  component={Signup}/>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.MONTH} render={(props) => <Month {...props} duration="month" />} />
        <Route exact path={routes.WEEK} render={(props) => <Month {...props} duration="week" />} />
        <Route exact path={routes.WEEK} render={(props) => <Month {...props} duration="year" />} />
      </Switch>
    </Router>
  )
}

export default App;