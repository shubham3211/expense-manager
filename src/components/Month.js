import React from 'react';
import { expense } from '../redux/actions/expense';
import { connect } from 'react-redux';
import { distributeExpense } from '../utils/expenseDuration'
import HomeTable from './HomeTable'
import DoughnutGraph from './DoughnutGraph'
import { expenseCategory } from '../redux/actions/expenseCategory';
import InfoCard from './InfoCard'
import { categories } from '../utils/category'
import LineGraph from './LineGraph';

class Month extends React.Component {
  constructor(props){
    super(props);
    this.distributedExpense = [];
  }

  renderInfoCard = () => this.props.category.map((category) =>
    <InfoCard expense={ category.count } icon={ categories[category._id].icon } category={ category._id } color={ categories[category._id].color } />
  )
  
  componentDidMount() {
    this.props.expense('month');
    this.props.expenseCategory('month');
  }

  render() {
    this.distributedExpense = this.props.moneySpent ? distributeExpense(this.props.moneySpent, 'month') : [];

    if(!this.props.moneySpent || !this.props.category){
      return (<div>Loading...</div>)
    }

    return (
      <React.Fragment>
        <div style={{backgroundColor:"black"}}>
          <LineGraph distributedExpense={this.distributedExpense} />
          <HomeTable duration="month" />
          <DoughnutGraph category={this.props.category} />
          {this.renderInfoCard()}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moneySpent: state.expense.month,
    category: state.expenseCategory.month
  }
}

export default connect(mapStateToProps, { expense, expenseCategory })(Month);