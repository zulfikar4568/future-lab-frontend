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
      <FlexboxGrid
        className="auth-layout container"
        justify="center"
        align="middle"
      >
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          md={10}
          className="auth-content"
        >
          <LoginForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
