import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.contacts.items;
export const getFilter = state => state.filter;

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
