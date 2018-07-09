import {combineReducers} from 'redux';
import {contacts} from './contactsReducer';

const reducers = combineReducers({
  contacts
});

export default reducers;