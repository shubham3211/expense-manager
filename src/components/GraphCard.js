import React from 'react';
import {expense} from '../redux/actions/expense'
import {connect} from 'react-redux';

class GraphCard extends React.Component {

  componentDidMount() {
    this.props.expense(this.props.duration);
  }

  render() {
    return (
      <React.Fragment>
        hello
      </React.Fragment>
    )
  }
}

const manageStateToProps = (state) => {
  return {
    moneySpent: state.expense
  }
}

export default connect(manageStateToProps, {expense})(GraphCard);

