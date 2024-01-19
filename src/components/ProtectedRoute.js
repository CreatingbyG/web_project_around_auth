import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isUserAuthorized, children }) {
  return isUserAuthorized ? children : <Navigate to="/signup"/>;
}

export default ProtectedRoute;