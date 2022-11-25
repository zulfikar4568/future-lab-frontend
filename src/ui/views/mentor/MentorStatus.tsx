import React from 'react';
import { Button } from 'rsuite';

export const MentorStatus: React.FC = () => {
  return (
    <>
      <div className="container mentor-status">
        <div className="mentor-status-info">
          <h5>Your appointment request has been sent to your mentor.</h5>
          <Button appearance="primary" block size="lg" href="/">
            Return
          </Button>
        </div>
      </div>
    </>
  );
};
