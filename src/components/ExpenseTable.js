import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'
import styled from 'styled-components';
import EditExpenseDialog from './EditExpenseDialog';
import DeleteExpenseDialog from './DeleteExpenseDialog';

const StyledTableRow = styled(TableRow)`
  background-color: ${props => props.rownumber ? "#fafafa" : "white"}
`

class HomeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showDeleteModal: false
    }
    this.editExpenseId = 0;
    this.deleteExpenseId = 0;
  }

  renderRows = () => this.props.moneySpent.map((row, rowNumber)=> (
    <StyledTableRow rownumber={(rowNumber+1)%2} key={row._id}>
      <TableCell>{rowNumber+1}</TableCell>
      <TableCell>{moment(row.date).format("MM/DD/YYYY") } {moment(row.date).format('dddd')}</TableCell>
      <TableCell>{row.cost}</TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell>{row.comment}</TableCell>
      <TableCell>
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon onClick={() => this.setIdAndOpenCloseEditModal(row._id)} />
        </Fab>
      </TableCell>
      <TableCell>
        <Fab color="secondary" aria-label="delete" size="small">
          <DeleteIcon onClick={() => this.setIdAndOpenCloseDeleteModal(row._id)} />
        </Fab>
      </TableCell>
    </StyledTableRow>
  ))
  
  editModalOpenClose = () => {
    this.setState((state) => {
      return {
        showEditModal: !state.showEditModal
      }
    })
  }

  setIdAndOpenCloseEditModal = (editExpenseId) => {
    this.editExpenseId = editExpenseId;
    this.setState((state) => {
      return {
        showEditModal: !state.showEditModal
      }
    })
  }

  setIdAndOpenCloseDeleteModal = (deleteExpenseId) => {
    this.deleteExpenseId = deleteExpenseId;
    this.setState((state) => {
      return {
        showDeleteModal: !state.showDeleteModal
      }
    })
  }

  openCloseDeleteMoadal = () => {
    this.setState((state) => {
      return {
        showDeleteModal: !state.showDeleteModal
      }
    })
  }

  render() {
    if(!this.props.moneySpent){
      return (<div>Hello</div>)
    }
    return (
      <React.Fragment>
        <EditExpenseDialog editExpenseId={this.editExpenseId} showEditModal={this.state.showEditModal} editModalOpenClose={this.editModalOpenClose} />
        <DeleteExpenseDialog deleteExpenseId={this.deleteExpenseId} showDeleteModal={this.state.showDeleteModal} openCloseDeleteMoadal={this.openCloseDeleteMoadal} />
        <Table>
          <TableHead>
            <TableRow style={{backgroundColor:"black"}}>
              <TableCell style={{color:"#fff"}}>#</TableCell>
              <TableCell style={{color:"#fff"}}>Date</TableCell>
              <TableCell style={{color:"#fff"}}>Expense</TableCell>
              <TableCell style={{color:"#fff"}}>Category</TableCell>
              <TableCell style={{color:"#fff"}}>Comments</TableCell>
              <TableCell style={{color:"#fff"}}>Edit</TableCell>
              <TableCell style={{color:"#fff"}}>Delete</TableCell>
            </TableRow >
          </TableHead>
          <TableBody>
            {this.renderRows()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const manageStateToProps = (state, props) => {
  return {
    moneySpent: state.expense[props.duration]
  }
}

export default connect(manageStateToProps, null)(HomeTable);