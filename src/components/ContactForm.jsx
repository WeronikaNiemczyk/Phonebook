import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from './API';
import './App.module.css';
import { Button, Flex } from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Flex justifyContent="center" width="100%" mt="10" mb="10">
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </label>
        <Button type="submit" bg="#bbd0f7">
          Add Contact
        </Button>
      </form>
    </Flex>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
