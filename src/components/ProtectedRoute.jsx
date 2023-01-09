import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserSession } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  const updatedUser = user ? user : getUserSession();
  if (!updatedUser || (requireAdmin && !updatedUser.isAdmin)) {
    return <Navigate to="/" replace />
  }

  return children;
}

