import React from 'react';
import GraphCard from './GraphCard';
import Grid from '@material-ui/core/Grid';
import InfoCardExpense from './InfoCardExpense';
import { connect } from 'react-redux';
import { overallSpent, maxCategory, expenseToday } from '../utils/expenseDuration'
import { expenseCategory } from '../redux/actions/expenseCategory';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { categories } from '../utils/category'; 

class CardContainer extends React.Component {
  componentDidMount() {
    this.props.expenseCategory('month');
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={4} style={{marginTop:"20px", marginBottom:"20px", marginLeft:"10px", marginRight:"10px"}}>
          <Grid item xs={4}>
            <GraphCard 
              duration="month" 
              color="#f39c12"
            />
          </Grid>
          <Grid item xs={4}>
            <GraphCard
              duration="week"
              color="#dd4b39"
            />
          </Grid>
          <Grid item xs={4}>
            <GraphCard 
              duration="year" 
              color="#00a65a"
            />
          </Grid>
          <Grid item xs={4}>
            {this.props.moneySpent ? 
              <InfoCardExpense 
                title="Overall Spent"
                value={overallSpent(this.props.moneySpent)}
                icon={MonetizationOnIcon}
                color="#f39c12"
              />
              : <div>Loading...</div>
            }
          </Grid>
          <Grid item xs={4}>
            {
              this.props.category ? 
              <InfoCardExpense
                title="Most Spent on"
                value={maxCategory(this.props.category)._id.toUpperCase()}
                icon={categories[maxCategory(this.props.category)._id].icon}
                color="#dd4b39"
              />
              : <div>Loading...</div>
            }
          </Grid>
          <Grid item xs={4}>
            {this.props.moneySpent ? 
              <InfoCardExpense 
                title="Today Spent"
                value={expenseToday(this.props.moneySpent)}
                icon={AttachMoneyIcon}
                color="#00a65a"
              />
              : <div>Loading...</div>
            }
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moneySpent: state.expense.year,
    category: state.expenseCategory.month
  }
}

export default connect(mapStateToProps, {expenseCategory})(CardContainer);