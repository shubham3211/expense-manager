import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {pink} from '@material-ui/core/colors';
import isEmail from '../../utils/isEmail';
import {signup} from '../../redux/actions/auth/signup';
import axios from 'axios';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'password',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
    if(field==='email' && values[field] && !isEmail(values[field])){
      errors[field]='Enter valid email address'
    }
  });  
  return errors;
}

class Signup extends React.Component {

  onSubmit = formValues => {
    // this.props.signup(formValues.name, formValues.email, formValues.password);
    axios.post('http://localhost:5000/auth/signup', {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    }).then((user) => {
      console.log(user);
    }).catch((err) =>{
      console.log(err);
    })
  } 

  renderTextField = ({input, label, type, meta:{touched, error}}) => {
    return (
      <React.Fragment>
        <TextField
          id="outlined-name"
          label={label}
          {...input}
          margin="normal"
          variant="outlined"
          type={type}
          fullWidth
          error={touched && error}
        />
        {touched && error ? this.renderError(error) : null}
      </React.Fragment>
    )
  }

  renderError = (error) => <Typography variant="caption" color="error">{error}</Typography>;

  trimPassword = (value) => {
    return value.trim();
  }

  render(){
    return (
      <Grid container direction="row" justify="center">
        <Grid item xs={4} >
          <Avatar style={{margin:"auto", backgroundColor:`${pink[500]}`}}>
            <LockOutlinedIcon align="center"/>
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Signup
          </Typography>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Grid item xs={12}>
              <Field name="name" component={this.renderTextField} type="text" label="Name *" />
            </Grid>
            <Grid item xs={12}>
              <Field name="email" component={this.renderTextField} type="email" label="Email Address *" />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" component={this.renderTextField} normalize={this.trimPassword} type="password" label="Password *"  />
            </Grid>
            <Button variant="contained" color="primary" type="submit" size="large" fullWidth>
              Signup
            </Button>
          </form>
        </Grid>
      </Grid>
    )
  }
}

const signupValues = reduxForm({
  form: 'signup',
  validate
})(Signup)

export default connect(null, {signup})(signupValues);