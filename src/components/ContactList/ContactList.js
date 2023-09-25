import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactList_item}>
        <p>
          {name} {number}
        </p>
        <button
          type="button"
          className={css.btn}
          onClick={() => ondeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      is_complete: PropTypes.bool,
    })
  ).isRequired,
  ondeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
