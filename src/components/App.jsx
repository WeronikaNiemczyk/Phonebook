import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ContactsPage } from 'pages/ContactsPage';
import { useEffect } from 'react';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import Navigation from './Navigation';
import { fetchCurrentUser } from './API';
import { getIsLoggedIn, getIsFetchingCurrentUser } from '../redux/selectors';
import UserMenu from './UserMenu';
import { Box } from '@chakra-ui/react';
import { Notify } from 'notiflix';
import { useState } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setHasAuth(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const RegisterRedirect = ({ hasAuth }) => {
    useEffect(() => {
      if (hasAuth) {
        Notify.info(
          'You are already registered and logged in. Please log out first.'
        );
      }
    }, [hasAuth]);

    return isLoggedIn ? <Navigate to="/" /> : <Register />;
  };

  const LoginRedirect = ({ hasAuth }) => {
    useEffect(() => {
      if (hasAuth) {
        Notify.info('You are already logged in. Please log out first.');
      }
    }, [hasAuth]);

    return isLoggedIn ? <Navigate to="/" /> : <Login />;
  };

  const ContactsLoginRedirect = () => {
    useEffect(() => {
      Notify.info('Please, log in or register.');
    }, []);

    return <Navigate to="/login" />;
  };

  return (
    !isFetchingCurrentUser && (
      <div>
        <Box m={5} display="flex" justifyContent="center" fontSize={32}>
          Phonebook
        </Box>
        <Navigation />
        {isLoggedIn && <UserMenu />}
        <Routes>
          <Route
            path="/register"
            element={<RegisterRedirect hasAuth={hasAuth} />}
          />
          <Route path="/login" element={<LoginRedirect hasAuth={hasAuth} />} />
          <Route
            path="/contacts"
            element={isLoggedIn ? <ContactsPage /> : <ContactsLoginRedirect />}
          />
        </Routes>
      </div>
    )
  );
};
