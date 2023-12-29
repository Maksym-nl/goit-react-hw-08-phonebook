import React from 'react';
import { Link } from 'react-router-dom';
import { LinkStyled } from './AuthNav.styled';
const AuthNav = () => {
  return (
    <div>
      <LinkStyled to="/registration">Register</LinkStyled>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthNav;
