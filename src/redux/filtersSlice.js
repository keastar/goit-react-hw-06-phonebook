import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
