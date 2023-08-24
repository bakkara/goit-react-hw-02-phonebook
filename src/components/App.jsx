import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { nanoid } from 'nanoid';

export class App extends Component {
state = {
  contacts: [],
  /* filter: '' */
  }

  addContact = newContact => {
    const { name } = newContact;
    const isExist = this.state.contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {id: nanoid(), ...newContact},
      ],
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
      {/*   <Filter  /> */}
        <ContactList filterContactsList={this.state.contacts} deleteContact={this.deleteContact} />
     </Layout>
    ); 
    }
}