import React, { useEffect, useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
// import contacts from '../todos.json';
import Container from '../Container/Container';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHandler({ name, number }) {
    const found = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (found) {
      alert('Already exist contact');
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  }

  // откидываем элемент, id которого совпадает с заявленным в (contactId)
  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function changeFilter(event) {
    setFilter(event.target.value);
  }

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  //Готовое и вполненое задание по книги контактов, рабочее.

  return (
    <>
      <Container>
        <Form onSubmit={formSubmitHandler} />
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts}
          ondeleteContact={deleteContact}
        />
      </Container>
    </>
  );
}
