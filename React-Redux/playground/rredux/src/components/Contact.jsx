import React from 'react';
import {connect} from 'react-redux';

import {addContact, getFromApi} from '../actions/contactsAction';

class Contact extends React.Component {

  componentWillMount() {
    let url = 'http://192.168.1.201:5001/rredux-api.php';
    this.props.getFromApi(url);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  addContact() {
    let newContact = {name:'AL', age: 50};
    this.props.addContact(newContact);
  }

  render() {
    const contacts = this.props.contacts.map((contact, i)=><li key={i}>Name: {contact.name} - Age: {contact.age}</li>);
    return (
      <div>
        <div className="add-contact" onClick={()=>{this.addContact()}}>Add Contact</div>
        <div><ul>{contacts}</ul></div>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = dispatch => {
  //console.log('dispatch', dispatch);
  return {
    addContact: contact => dispatch(addContact(contact)),
    getFromApi: url=>dispatch(getFromApi(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact);