import React from 'react';
import { Navigate } from 'react-router-dom';
import { Col, FlexboxGrid } from 'rsuite';
import { SignInForm } from '../../components/auth/SignInForm';

export const SignIn: React.FC = () => {
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
          <SignInForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
