import {EXPENSE_MONTH, EXPENSE_YEAR, EXPENSE_WEEK} from '../../constants';

export const expense = (state={}, action) => {
  switch(action.type){
    case EXPENSE_MONTH:
      return {...state, 'month':action.payload}
    case EXPENSE_YEAR:
      return {...state, 'year':action.payload}
    case EXPENSE_WEEK:
      return {...state, 'week':action.payload}
    default:
      return state;
  }
}