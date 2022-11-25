import React from 'react';
import '@/ui/assets/stylesheets/layout/_navbar-mobile.scss';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Nav, FlexboxGrid, Navbar } from 'rsuite';

export const NavigationBottom: React.FC = () => {
  const logged = true;

  return (
    <>
      <Navbar
        style={{ display: !logged ? 'none' : 'block' }}
        appearance="default"
      >
        <Nav className="bottom-mobile-navigation">
          <FlexboxGrid justify="center">
            <Nav.Item href="/" icon={<HomeIcon />}>
              Home
            </Nav.Item>
            <Nav.Item href="/session">
              <span className="material-symbols-outlined">date_range</span>{' '}
              Sessions
            </Nav.Item>
          </FlexboxGrid>
        </Nav>
      </Navbar>
    </>
  );
};
