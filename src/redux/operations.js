import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65814b3a3dfdd1b11c42e145.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const responce = await axios.get('contacts');
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkApi) => {
    try {
      const responce = await axios.post('contacts', newContact);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const responce = await axios.delete(`contacts/${contactId}`);
      return responce.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
