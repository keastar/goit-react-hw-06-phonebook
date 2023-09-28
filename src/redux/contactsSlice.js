import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
    completed: true,
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '443-89-12',
    completed: true,
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '645-17-79',
    completed: false,
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '227-91-26',
    completed: false,
  },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
