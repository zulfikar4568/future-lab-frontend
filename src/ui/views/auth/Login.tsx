import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/auth/LoginForm';

export const Login: React.FC = () => {
  const logged = false;

  if (logged) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <LoginForm />
    </>
  );
};
