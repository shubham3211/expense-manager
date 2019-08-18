import React from 'react';
import {expense} from '../redux/actions/expense'
import {connect} from 'react-redux';
import {distributeExpense} from '../utils/expenseDuration'

class GraphCard extends React.Component {

  componentDidMount() {
    this.props.expense(this.props.duration);
  }

  componentDidUpdate() {
    let distributedExpense = distributeExpense(this.props.moneySpent, this.props.duration);
    console.log( ` ${this.props.duration}`, this.props.moneySpent)
    console.log(`distributedExpense ${this.props.duration}`, distributedExpense);
  }

  render() {
    return (
      <React.Fragment>
        hello
      </React.Fragment>
    )
  }
}

const manageStateToProps = (state, props) => {
  return {
    moneySpent: state.expense[props.duration]
  }
}

export default connect(manageStateToProps, {expense})(GraphCard);

