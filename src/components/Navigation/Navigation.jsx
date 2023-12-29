import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/selectors';
const Navigation = () => {
  const isLoggedIn = useSelector(isLogin);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
