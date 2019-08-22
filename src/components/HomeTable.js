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

const StyledTableRow = styled(TableRow)`
  background-color: ${props => props.rowNumber ? "#fafafa" : "white"}
`

class HomeTable extends React.Component {

  renderRows = () => this.props.moneySpent.year.map((row, rowNumber)=> (
    <StyledTableRow rowNumber={(rowNumber+1)%2}>
      <TableCell>{rowNumber+1}</TableCell>
      <TableCell>{moment(row.date).format("MM/DD/YYYY") } {moment(row.date).format('dddd')}</TableCell>
      <TableCell>{row.cost}</TableCell>
      <TableCell>{row.category}</TableCell>
      <TableCell>{row.comment}</TableCell>
      <TableCell>
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
      </TableCell>
      <TableCell>
        <Fab color="secondary" aria-label="delete" size="small">
          <DeleteIcon />
        </Fab>
      </TableCell>
    </StyledTableRow>
  ))
  

  render() {
    console.log('home table', this.props.moneySpent);
    if(!this.props.moneySpent.year){
      return (<div>Hello</div>)
    }
    return (
      <React.Fragment>
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

const manageStateToProps = (state) => {
  return {
    moneySpent: state.expense
  }
}

export default connect(manageStateToProps, null)(HomeTable);