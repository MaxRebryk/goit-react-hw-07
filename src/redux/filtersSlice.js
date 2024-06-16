import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
import { createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredcontacts = createSelector(
  [selectNameFilter, selectContacts],
  (nameFilter, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export default slice.reducer;

export const { changeFilter } = slice.actions;
