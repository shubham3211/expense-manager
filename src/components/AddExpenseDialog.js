import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import {expense} from '../redux/actions/expense'

const validate = values => {
  const errors = {};
  const requiredFields = [
    'expense',
    'category',
    'comment'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });  
  return errors;
}

class AddExpenseDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  onSubmit = formValues => {
    console.log(formValues);
    axios.post('http://localhost:5000/expense', {
      date: formValues.date,
      cost: formValues.expense,
      category: formValues.category,
      comment: formValues.comment,
      user: this.props.userId
    }).then((data) => {
      this.props.expense('year');
      this.props.expense('week');
      this.props.expense('month');
    })
  }

  handleOpenClose = () => {
    this.setState((state) => {
      return {open: !state.open}
    })
  }
  
  renderTextField = ({input, label, type, meta:{touched, error}}) => {
    return (
      <React.Fragment>
        <TextField
          label={label}
          {...input}
          margin="normal"
          type={type}
          fullWidth={type!=='date'}
          error={touched && error}
        />
        {touched && error ? this.renderError(error) : null}
      </React.Fragment>
    )
  }
  
  renderError = (error) => <Typography variant="caption" color="error">{error}</Typography>;

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleOpenClose}>
          Open form dialog
        </Button>
        <Dialog open={this.state.open} onClose={this.handleOpenClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Add an expense
          </DialogTitle>
          <DialogContent>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name="date" component={this.renderTextField}  type="date" />
              <Field name="expense" component={this.renderTextField} type="number" label="Expense *" />
              <Field name="category" component={this.renderTextField} type="text" label="Category *" />
              <Field name="comment" component={this.renderTextField} type="text" label="Comment *" />
              <DialogActions>
                <Button onClick={this.handleOpenClose} type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const editForm = reduxForm({
  form: 'edit',
  validate
})(AddExpenseDialog)

const mapStateToProps = (state) => {
  return {
    userId: state.user.userId
  }
}

export default connect(mapStateToProps, {expense})(editForm);