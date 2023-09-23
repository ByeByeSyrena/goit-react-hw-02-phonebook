const ContactForm = ({ filteredContacts, handleRemove }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button type="button" onClick={() => handleRemove(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactForm;
