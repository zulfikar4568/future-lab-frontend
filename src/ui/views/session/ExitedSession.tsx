import React from 'react';
import { Button, ButtonToolbar, Col, Grid, Row } from 'rsuite';

export const ExitedSession: React.FC = () => {
  return (
    <>
      <div className="container exited-session">
        <h4>You've exited the room</h4>
        <div className="exited-session-control">
          <ButtonToolbar>
            <Grid fluid>
              <Row gutter={24}>
                <Col xs={12}>
                  <div className="show-col">
                    <Button appearance="ghost" block href="/123/session-start">
                      Rejoin
                    </Button>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="show-col">
                    <Button appearance="primary" block href="/">
                      End Session
                    </Button>
                  </div>
                </Col>
              </Row>
            </Grid>
          </ButtonToolbar>
        </div>

        <p>Submit feedback</p>
      </div>
    </>
  );
};
