import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Container, Header, Content } from 'rsuite';
import { NavigationBar } from '../components/layout/NavigationBar';

export const DashboardLayout: React.FC = () => {
  const logged = true;

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Container>
        <Header>
          <NavigationBar />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};
