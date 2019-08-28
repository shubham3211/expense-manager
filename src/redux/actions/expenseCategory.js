import { EXPENSE_CATEGORY_MONTH, EXPENSE_CATEGORY_YEAR, EXPENSE_CATEGORY_WEEK } from '../../constants';
import axios from 'axios';

export const expenseCategory = (duration) => {
  duration = duration.toLowerCase();
  let type = duration === 'week' ? EXPENSE_CATEGORY_WEEK : duration === 'year' ? EXPENSE_CATEGORY_YEAR : EXPENSE_CATEGORY_MONTH;
  return dispatch => {
    axios.get(`http://localhost:5000/expense/category/${duration}`)
      .then((category) => {
        dispatch({
          type,
          payload: category.data
        })
      })
  }
}