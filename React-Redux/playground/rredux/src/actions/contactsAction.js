import {ADD_CONTACT, API_CONTACT} from '../constant';

const superagent = require('superagent');

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

export function getFromApi(url) {
  return {
    type: API_CONTACT,
    payload: superagent.get(url)
  }
}