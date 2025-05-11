import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return <Navigate to="/login" />;
  }

  // if (!allowedRoles.includes(user.type)) {
  //   return <Navigate to="/unauthorized" />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;