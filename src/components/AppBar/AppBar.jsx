import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/selectors';
import AppBarWrapper from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const AppBar = () => {
  const isLoggedIn = useSelector(isLogin);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarWrapper position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {' '}
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBarWrapper>
    </Box>
  );
};

export default AppBar;
