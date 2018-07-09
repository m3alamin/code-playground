import {ADD_CONTACT, API_CONTACT} from '../constant';

export const contacts = (state = [], action) => {
  switch(action.type) {

    case ADD_CONTACT: {
      let contacts = [...state];
      contacts.push(action.payload);
      return contacts;
    }

    case API_CONTACT: {
      let contacts = [...state];
      contacts.push(action.payload);
      return contacts;
    }

    default: {
      return state;
    }

  }
}