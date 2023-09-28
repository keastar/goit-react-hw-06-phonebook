import React from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert('Already exist contact');
    }
    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.label_input}
          />
        </label>
        <label className={css.label}>
          tel:
          <input type="tel" name="number" className={css.label_input} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
