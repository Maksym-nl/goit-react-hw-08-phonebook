import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import PrivatRoute from './PrivatRoute';
import PublicRoute from './PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Registration = lazy(() => import('pages/Registration/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={<PrivatRoute redirectTo="/login" component={<Contacts />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/registration"
          element={
            <PublicRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
