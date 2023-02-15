/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoggedInContext from '../contexts/LoggedInContext';

function ProtectedRoute({ component }) {
  const isLoggedIn = useContext(LoggedInContext);
  return (
    isLoggedIn ? component : <Navigate to="/" />
  );
}

export default ProtectedRoute;
