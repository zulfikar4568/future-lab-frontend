import React from 'react';
import { Navigate } from 'react-router-dom';
import { Col, FlexboxGrid } from 'rsuite';
import { LoginForm } from '../../components/auth/LoginForm';

export const Login: React.FC = () => {
  const logged = false;

  if (logged) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <FlexboxGrid className="auth-layout" justify="center" align="middle">
        <FlexboxGrid.Item as={Col} colspan={24} md={6} className="auth-content">
          <LoginForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
