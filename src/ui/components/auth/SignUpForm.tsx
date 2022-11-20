import React from 'react';
import { Button, ButtonToolbar, Form, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';

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
      <h2>Getting Started</h2>
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
            <Button appearance="primary" size="lg" block>
              Sign Up
            </Button>
          </ButtonToolbar>
        </Form.Group>
        <p>
          By signing up, you agree to FutureLab's{' '}
          <Link to="/">terms and conditions</Link>
        </p>
      </Form>
    </>
  );
};
