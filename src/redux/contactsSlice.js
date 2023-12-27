import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePendihg = state => {
  state.contacts.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.pending, handlePendihg)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(addContact.pending, handlePendihg)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.pending, handlePendihg)
      .addCase(deleteContact.rejected, handleRejected),
});
