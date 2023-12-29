import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../redux/auth/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
