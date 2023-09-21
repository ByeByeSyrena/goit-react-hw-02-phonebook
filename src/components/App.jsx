import React, { Component } from 'react';
import 'normalize.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  loginInputId = nanoid();

  state = {
    name: '',
    number: '',
    contacts: [],
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // console.log(event.currentTarget.value);
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
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.loginInputId}>Phonebook</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
            id={this.loginInputId}
          />

          <label htmlFor={this.loginInputId}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={number}
            id={this.loginInputId}
          />

          <button type="submit">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
