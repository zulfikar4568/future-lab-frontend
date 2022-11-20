import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';
import { SignUpForm } from '../../components/auth/SignUpForm';

export const SignUp: React.FC = () => {
  return (
    <>
      <FlexboxGrid className="auth-layout" justify="center" align="middle">
        <FlexboxGrid.Item as={Col} colspan={24} md={6} className="auth-content">
          <SignUpForm />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
