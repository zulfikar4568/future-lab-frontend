import React from 'react';
import { Button, ButtonToolbar, DatePicker, Form } from 'rsuite';
import { BackButton } from '../../components/common/BackButton';

export const MentorSchedule: React.FC = () => {
  return (
    <>
      <div className="container mentor-schedule">
        <BackButton urlBack={'/12/mentor-detail'} title={'Schedule call'} />
        <Form fluid>
          <Form.Group controlId="from-date">
            <Form.ControlLabel>From Date</Form.ControlLabel>
            <Form.Control
              name="from-date"
              format="yyyy-MM-dd HH:mm:ss"
              block
              accepter={DatePicker}
            />
          </Form.Group>
          <Form.Group controlId="to-date">
            <Form.ControlLabel>To Date</Form.ControlLabel>
            <Form.Control
              name="to-date"
              format="yyyy-MM-dd HH:mm:ss"
              block
              accepter={DatePicker}
            />
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" block>
                Schedule a call
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};
