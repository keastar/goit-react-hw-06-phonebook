import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
// import { getFilterContact } from 'redux/selectors';
import { setFilterContacts } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilterContact);

  const handleFilter = event => {
    dispatch(setFilterContacts(event.target.value));
  };

  return (
    <label className={css.contactList_item_label}>
      Фильтр по имени:{' '}
      <input type="text" name="filter" onChange={handleFilter} />
    </label>
  );
};

export default Filter;
