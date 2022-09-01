import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { ModalLogin } from '../Auth/Modal';

export const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
