import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../Hook/Zustand/useAuth';

export const ProtectedRoute = () => {
  const {
    auth: { user },
  } = useAuth();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
