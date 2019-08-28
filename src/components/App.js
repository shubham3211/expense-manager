import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Home from './Home';
import Month from './Month';
import * as routes from '../constants/routes';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{flexGrow:1}}>
              Expense Manager
            </Typography>
            <Link to="/login" style={{textDecoration: 'none', color:"#fff"}}>
              <Button color="white">Login</Button>
            </Link>
            <Link to="/home" color="#fff">Home</Link>
            <Link to="/month" color="#fff">Month</Link>
            <Link to="/week" color="#fff">Week</Link>
          </Toolbar>
        </AppBar>
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
}

export default App;