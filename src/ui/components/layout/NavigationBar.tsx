import React from 'react';
import { Header, Navbar, Nav, Avatar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import ImgLogo from '../../assets/images/future-lab.svg';

export const NavigationBar: React.FC = () => {
  return (
    <>
      <Header>
        <Navbar appearance="default">
          <Navbar.Brand>
            <img src={ImgLogo} width={100} />
          </Navbar.Brand>
          <Nav>
            <Nav.Item href="/" icon={<HomeIcon />}>
              Home
            </Nav.Item>
            <Nav.Item href="/session">
              <span className="material-symbols-outlined">date_range</span>{' '}
              Sessions
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Menu
              title={
                <Avatar size="sm" circle style={{ background: '#000' }}>
                  Z
                </Avatar>
              }
            >
              <Nav.Item>Profile</Nav.Item>
              <Nav.Item>Logout</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Navbar>
      </Header>
    </>
  );
};
