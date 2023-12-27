import { useState } from 'react';
import { addContact } from '../../redux/operations';
import { GoSearch } from 'react-icons/go';
import { NameLabel, Input } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { getContacts } from '../../redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is Exist`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    reset();
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <NameLabel>
        Name:
        <Input
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </NameLabel>
      <NameLabel>
        Number:
        <Input
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </NameLabel>
      <button type="submit">
        <GoSearch size="40px" />
      </button>
    </form>
  );
};
