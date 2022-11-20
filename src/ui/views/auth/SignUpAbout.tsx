import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';
import { SignUpFormAbout } from '../../components/auth/SignUpAboutForm';

export const SignUpAbout: React.FC = () => {
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
          <SignUpFormAbout />
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};
