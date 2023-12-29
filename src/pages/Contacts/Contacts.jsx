import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {' '}
      {isLoading && <Loader />}
      <Form />
      <Filter />
      <ContactList />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Contacts;
