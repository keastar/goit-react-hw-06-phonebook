import React from 'react';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { getFilterContact } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterContact).toLowerCase();
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  const getVisibleContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactList_item}>
          <p>
            {name} {number}
          </p>
          <button
            type="button"
            className={css.btn}
            id={id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
