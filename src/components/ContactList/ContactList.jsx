import {
  List,
  ListItem,
  NameItem,
  ContactItem,
  BtnItem,
} from './Contactlist.styled';
import { ImCross } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export function ContactList() {
  const contacts = useSelector(getFilterContacts);
  console.log(contacts);
  const dispatch = useDispatch();
  return (
    <List>
      {' '}
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <NameItem color="blue">{contact.name}</NameItem>
          <ContactItem color="green">{contact.number}</ContactItem>
          <BtnItem onClick={() => dispatch(deleteContact(contact.id))}>
            Удалить
            <ImCross />
          </BtnItem>
        </ListItem>
      ))}{' '}
    </List>
  );
}
