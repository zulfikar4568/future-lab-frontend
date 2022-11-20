import React from 'react';
import { Avatar, Button, Nav, Navbar } from 'rsuite';
import ImgLogo from '../../../assets/images/future-lab.svg';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import ExitIcon from '@rsuite/icons/Exit';

export const NavigationTop: React.FC = () => {
  const logged = true;

  return (
    <>
      <Navbar appearance="default" className="top-mobile-navigation">
        <Navbar.Brand>
          <img src={ImgLogo} width={100} />
        </Navbar.Brand>
        {logged ? (
          <>
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
