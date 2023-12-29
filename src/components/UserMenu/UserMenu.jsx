import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { BootstrapButton } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const logedUser = useSelector(user);
  return (
    <div>
      <p>{logedUser.name}</p>
      <BootstrapButton type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </BootstrapButton>
    </div>
  );
};

export default UserMenu;
