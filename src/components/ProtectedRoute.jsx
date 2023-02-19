/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoggedInContext from '../contexts/LoggedInContext';
import Preloader from './Preloader/Preloader';

function ProtectedRoute({ isLoading, element }) {
  const isLoggedIn = useContext(LoggedInContext);
  return (
    isLoggedIn ? element : (isLoading ? <Preloader /> : <Navigate to="/" />)
  );
}

export default ProtectedRoute;
