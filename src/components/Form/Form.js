import React, { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return null;
    }
  };

  const resetN = () => {
    setName('');
  };

  const resetNu = () => {
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetN();
    resetNu();
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
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          tel:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            className={css.label_input}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
