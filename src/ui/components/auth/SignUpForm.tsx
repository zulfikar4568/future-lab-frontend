import React from 'react';
import { Button, ButtonToolbar, Form, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/future-lab.svg';

export const SignUpForm: React.FC = () => {
  const [visiblePass1, setVisiblePass1] = React.useState(false);
  const [visiblePass2, setVisiblePass2] = React.useState(false);

  const handleChange = () => {
    setVisiblePass1(!visiblePass1);
  };

  const handleChange2 = () => {
    setVisiblePass2(!visiblePass2);
  };

  return (
    <>
      <img src={ImgLogo} width={200} />
      <h3>Getting Started</h3>
      <p>
        Already register? <Link to="/signin">Sign in here</Link>
      </p>
      <Form fluid>
        <Form.Group controlId="first-name-1">
          <Form.ControlLabel>First Name</Form.ControlLabel>
          <Form.Control name="first-name" type="text" size="lg" />
        </Form.Group>
        <Form.Group controlId="last-name-1">
          <Form.ControlLabel>Last Name</Form.ControlLabel>
          <Form.Control name="last-name" type="text" size="lg" />
        </Form.Group>
        <Form.Group controlId="email-1">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" size="lg" />
        </Form.Group>
        <Form.Group controlId="password-1">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <InputGroup inside>
            <Form.Control
              name="password"
              type={visiblePass1 ? 'text' : 'password'}
              autoComplete="off"
              size="lg"
            />
            <InputGroup.Addon onClick={handleChange}>
              {visiblePass1 ? <EyeIcon /> : <EyeSlashIcon />}
            </InputGroup.Addon>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="password-2">
          <Form.ControlLabel>Confirm Password</Form.ControlLabel>
          <InputGroup inside>
            <Form.Control
              name="password"
              type={visiblePass2 ? 'text' : 'password'}
              autoComplete="off"
              size="lg"
            />
            <InputGroup.Addon onClick={handleChange2}>
              {visiblePass2 ? <EyeIcon /> : <EyeSlashIcon />}
            </InputGroup.Addon>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" size="lg" block href="/signup/about">
              Sign Up
            </Button>
          </ButtonToolbar>
        </Form.Group>
        <p>
          By signing up, you agree to FutureLab's{' '}
          <Link to="/term-of-service">terms and conditions</Link>
        </p>
      </Form>
    </>
  );
};
