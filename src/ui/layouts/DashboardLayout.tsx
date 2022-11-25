import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Container, Header, Content } from 'rsuite';
import { NavigationBar } from '../components/layout/NavigationBar';
import { NavigationBottom } from '../components/layout/mobile/NavigationBottom';
import { NavigationTop } from '../components/layout/mobile/NavigationTop';

export const DashboardLayout: React.FC = () => {
  const logged = true;

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Container>
        <Header>
          <NavigationTop />
          <NavigationBar />
          <NavigationBottom />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};
