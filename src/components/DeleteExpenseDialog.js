import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import {expense} from '../redux/actions/expense';
import {connect} from 'react-redux';

class DeleteExpenseDialog extends React.Component {
  deleteExpense = () => {
    this.props.openCloseDeleteMoadal();
    axios.delete(`http://localhost:5000/expense/${this.props.deleteExpenseId}`)
      .then((data)=> {   
        this.props.expense('year');
        this.props.expense('week');
        this.props.expense('month');     
      })
      .catch((data)=> {console.log(data)});
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.showDeleteModal}
          onClose={this.props.openCloseDeleteMoadal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.openCloseDeleteMoadal} color="primary">
              Disagree
            </Button>
            <Button onClick={this.deleteExpense} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(null, {expense})(DeleteExpenseDialog);