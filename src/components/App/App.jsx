import React from 'react';
import Filter from '../Filter/Filter';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';

export default function App() {
  return (
    <>
      <Container>
        <Form />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
