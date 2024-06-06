import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact, addContact, deleteContact } from '../components/API';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../redux/selectors';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filtrer';
import { Flex, Text } from '@chakra-ui/react';


export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const isInPhonebook = contacts.some(
      phoneContact => phoneContact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInPhonebook) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Flex justifyContent="center" width="100%" mt="10" mb="10">
      <div>
        <ContactForm addContact={handleAddContact} />
        <Text justifyItems={'center'}>Contacts</Text>
        <Filter value={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={handleDeleteContact}
        />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </Flex>
  );
};
