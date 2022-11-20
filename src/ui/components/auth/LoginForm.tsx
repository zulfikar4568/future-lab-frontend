import React from 'react';
import { Button, ButtonToolbar, Form, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h2>Login into FutureLab</h2>
      <Form fluid>
        <Form.Group controlId="email-1">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" size="lg" />
        </Form.Group>
        <Form.Group controlId="password-1">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <InputGroup inside>
            <Form.Control
              name="password"
              type={visible ? 'text' : 'password'}
              autoComplete="off"
              size="lg"
            />
            <InputGroup.Addon onClick={handleChange}>
              {visible ? <EyeIcon /> : <EyeSlashIcon />}
            </InputGroup.Addon>
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" size="lg" block>
              Login
            </Button>
          </ButtonToolbar>
        </Form.Group>
        <p>
          <Link to="/signup">Not a member ? Sign Up</Link>
        </p>
      </Form>
    </>
  );
};
