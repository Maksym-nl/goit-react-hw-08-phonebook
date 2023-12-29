// import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from '@mui/material/Container';
// export const Layout = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 1200px;
//   gap: 20px;
// `;
export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
