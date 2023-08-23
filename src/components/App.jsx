import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";


export class App extends Component {
state = {
  contacts: [],
  filter: ''
  }

  handlerDeleteContact = () => {
    
  }

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter  />
        <ContactList filterContactsList={this.state.filter} deleteContact={this.handlerDeleteContact} />
     </Layout>
    ); 
    }
}