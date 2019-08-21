import React from 'react';
import {expense} from '../redux/actions/expense'
import {connect} from 'react-redux';
import {distributeExpense} from '../utils/expenseDuration'
import {Line} from 'react-chartjs-2';
import moment from 'moment';

class GraphCard extends React.Component {

  constructor(props) {
    super(props);
    this.distributedExpense = [];
  }

  componentDidMount() {
    this.props.expense(this.props.duration);
  }

  makeDataForGraph = () => {
    let labels;
    this.props.duration === 'year' ? labels = moment.monthsShort() : this.props.duration === 'week' ? labels = moment.weekdaysShort() : labels = [...Array(31).keys()];
    return {
      labels,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.distributedExpense
        }
      ]
    };
  }

  render() {  
    this.distributedExpense = this.props.moneySpent ? distributeExpense(this.props.moneySpent, this.props.duration) : [];
    return (
      <React.Fragment>
        {this.props.duration}
        <Line data={this.makeDataForGraph()} />
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

