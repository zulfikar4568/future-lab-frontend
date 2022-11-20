import React from 'react';
import { Button, ButtonToolbar, Form, Input } from 'rsuite';

export const SignUpFormAbout: React.FC = () => {
  const Textarea = React.forwardRef((props, ref: any) => (
    <Input {...props} rows={20} as="textarea" ref={ref} />
  ));

  return (
    <>
      <h3>Introduce yourself</h3>
      <Form fluid>
        <Form.Group controlId="textarea-1">
          <Form.Control
            name="textarea"
            accepter={Textarea}
            placeholder="Hi There! My Goal is to learn new and exciting stuff. I'm looking to join a brand new company and home my own personal skills"
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" block href="/">
              Next
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  );
};
