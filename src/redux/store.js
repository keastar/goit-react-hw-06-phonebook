import { configureStore } from '@reduxjs/toolkit';
// import { createReducer } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// const myReducer = createReducer();
const enhancer = devToolsEnhancer();

export const store = configureStore(
  {
    reducer: {
      contacts: contactsReducer,
      filters: filtersReducer,
    },
  },
  enhancer
);
