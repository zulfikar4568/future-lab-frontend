import React from 'react';
import { Navbar, Nav, Avatar, Button } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import ImgLogo from '../../assets/images/future-lab.svg';
import '@/ui/assets/stylesheets/layout/_navbar.scss';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import ExitIcon from '@rsuite/icons/Exit';

export const NavigationBar: React.FC = () => {
  const logged = true;

  return (
    <>
      <Navbar appearance="default" className="container-navbar">
        <Navbar.Brand>
          <img src={ImgLogo} width={100} />
        </Navbar.Brand>
        {logged ? (
          <>
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
                <Nav.Item icon={<UserInfoIcon />}>Profile</Nav.Item>
                <Nav.Item icon={<ExitIcon />}>Logout</Nav.Item>
              </Nav.Menu>
            </Nav>
          </>
        ) : (
          <Nav pullRight>
            <Nav.Item href="/signin">
              <Button appearance="primary"> Signin</Button>
            </Nav.Item>
          </Nav>
        )}
      </Navbar>
    </>
  );
};
