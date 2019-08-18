import monmet from 'moment'

const expensePerMonth = (expenses) => {
  let year = new Array(12).fill(0);
  expenses.forEach(expense => {
    year[monmet(expense.date).month()]+=expense.cost;  
  });
  return year;
}

const expensePerDay = (expenses) => {
  let month = new Array(32).fill(0);
  expenses.forEach(expense => {
    month[monmet(expense.date).date()]+=expense.cost;
  });
  return month;
}

const expenseInSevenDays = (expenses) => {
  let year = new Array(7).fill(0);
  expenses.forEach(expense => {
    year[monmet(expense.date).day()]+=expense.cost;  
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