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

class EditExpenseDialog extends React.Component {

  onSubmit = formValues => {
    console.log('editExpenseId' ,this.props.editExpenseId);
    axios.put(`http://localhost:5000/expense/${this.props.editExpenseId}`, {
      date: formValues.date,
      cost: formValues.expense,
      category: formValues.category,
      comment: formValues.comment,
    }).then((data) => {
      console.log(data)
      this.props.expense('year');
      this.props.expense('week');
      this.props.expense('month');
    }).catch((data) => {
      console.log(data);
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
        <Dialog open={this.props.showEditModal} onClose={this.props.editModalOpenClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Edit expense
          </DialogTitle>
          <DialogContent>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field name="date" component={this.renderTextField}  type="date" />
              <Field name="expense" component={this.renderTextField} type="number" label="Expense *" />
              <Field name="category" component={this.renderTextField} type="text" label="Category *" />
              <Field name="comment" component={this.renderTextField} type="text" label="Comment *" />
              <DialogActions>
                <Button onClick={this.props.editModalOpenClose} type="submit" color="primary">
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
  form: 'editExpense',
  validate
})(EditExpenseDialog)

export default connect(null, {expense})(editForm);