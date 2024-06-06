import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './App.module.css';
import { Button } from '@chakra-ui/react';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, deleteContact }) => {
  const onDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <li>
      <div>
        {contact.name} - {contact.number}
        <Button bg="#bbd0f7" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
