import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';
import { SignUpForm } from '../../components/auth/SignUpForm';

export const SignUp: React.FC = () => {
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
          <SignUpForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
