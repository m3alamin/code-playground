import {CHANGE_AGE, CHANGE_NAME} from '../actions/about';

let initState = {name: 'AL', age: 80};
const about = (state = initState, action)=> {
  switch(action.type) {
    case CHANGE_AGE: {
      return {
        ...state,
        age: action.payload
      }
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default about;