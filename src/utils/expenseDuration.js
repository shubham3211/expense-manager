import moment from 'moment'

const expensePerMonth = (expenses) => {
  let year = new Array(12).fill(0);
  expenses.forEach(expense => {
    year[moment(expense.date).month()]+=expense.cost;  
  });
  return year;
}

const expensePerDay = (expenses) => {
  let month = new Array(32).fill(0);
  expenses.forEach(expense => {
    month[moment(expense.date).date()]+=expense.cost;
  });
  return month;
}

const expenseInSevenDays = (expenses) => {
  let year = new Array(7).fill(0);
  expenses.forEach(expense => {
    year[moment(expense.date).day()]+=expense.cost;  
  });
  return year;
}

export const distributeExpense = function (expenses, duartion) {
  switch(duartion.toLowerCase()){
    case 'year':
      return expensePerMonth(expenses)
    case 'month':
      return expensePerDay(expenses)
    case 'week':
      return expenseInSevenDays(expenses)
    default: 
      return []
  }
}

export const overallSpent = (expense) => expense.reduce((total, current) => total+parseInt(current.cost, 10), 0)

export const maxCategory = (categories) => categories.reduce((maxCategory, currentCategory) => currentCategory.count > maxCategory.count ? currentCategory : maxCategory, {count:0})

export const expenseToday = (expense) => {
  let now=moment().format('YYYY-MM-DD')
  return expense.reduce((total, current) => moment(current.date).format('YYYY-MM-DD')===now ? total+current.cost : total, 0)
}
