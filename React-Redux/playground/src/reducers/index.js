import {combineReducers} from 'redux';
import home from './home';
import about from './about';

const allReducers = {
  home,
  about
}
const reducers = combineReducers(allReducers);

export default reducers;