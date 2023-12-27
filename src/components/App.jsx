import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts.contacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(isLoading);
  return (
    <Layout>
      {isLoading && <Loader />}

      <Form />
      <Filter />
      <ContactList />
      {error && <p>{error}</p>}
      <GlobalStyle />
    </Layout>
  );
};
