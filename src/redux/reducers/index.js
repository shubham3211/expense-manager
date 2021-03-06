import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import login from './auth/login';
// import signup from './auth/signup'
import {expense} from './expense';
import {expenseCategory} from './expenseCategory'

export default combineReducers({
  form: formReducer,
  user: login,
  expense,
  expenseCategory
})