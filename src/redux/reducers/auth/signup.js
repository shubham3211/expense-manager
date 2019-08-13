import {SIGNUP} from '../../../constants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initState = {
  email: cookies.get('email'),
  userId: cookies.get('userId')
}

console.log('cookies', cookies);

const signup = (state = initState, action) => {
  switch(action.type){
    case SIGNUP: 
      return action.payload;
    default:
      return state;
  }
}

export default signup;