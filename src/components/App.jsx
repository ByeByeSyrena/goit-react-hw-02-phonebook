import React, { Component } from 'react';
import 'normalize.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  loginInputId = nanoid();

  state = {
    name: '',
    number: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
  const { name, number, filter, contacts } = this.state;

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={name}
          id={this.loginInputId}
        />

        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={number}
          id={this.loginInputId}
        />

        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        onChange={this.handleChange}
        value={filter}
        id={this.loginInputId}
      />

      {filter === '' ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}: {contact.number}</span>
              <button type='button'>Delete</button>
            </li>
          ))}
        </ul>
      ) : filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}: {contact.number}</span>
              <button type='button'>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching contacts found</p>
      )}
    </>
  );
}

}
