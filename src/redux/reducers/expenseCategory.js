import { EXPENSE_CATEGORY_MONTH, EXPENSE_CATEGORY_YEAR, EXPENSE_CATEGORY_WEEK } from '../../constants';

export const expenseCategory = (state = {}, action) => {
  switch(action.type){
    case EXPENSE_CATEGORY_MONTH:
      return {...state, 'month':action.payload}
    case EXPENSE_CATEGORY_YEAR:
      return {...state, 'year':action.payload}
    case EXPENSE_CATEGORY_WEEK:
      return {...state, 'week':action.payload}
    default:
      return state;
  }
}
