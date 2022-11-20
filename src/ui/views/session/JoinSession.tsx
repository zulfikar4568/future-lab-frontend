import { BackButton } from '@/ui/components/common/BackButton';
import React from 'react';
import { Avatar, Button, ButtonToolbar, Col, Grid, Row } from 'rsuite';

export const JoinSession: React.FC = () => {
  return (
    <>
      <div className="container join-session">
        <BackButton urlBack={'/session'} title={'Back'} />
        <div className="join-session-info">
          <img
            src="https://avatars.githubusercontent.com/u/12592949"
            alt="my profile"
            width={300}
          />

          <h4>Ready to Join the room</h4>
          <Avatar
            size="sm"
            circle
            src="https://avatars.githubusercontent.com/u/12592949"
            alt="@SevenOutman"
          />
          <p>
            <b>Zulfikar Isnaen</b> is in the room
          </p>
          <div className="join-session-control">
            <ButtonToolbar>
              <Grid fluid>
                <Row gutter={24}>
                  <Col xs={12}>
                    <div className="show-col">
                      <Button appearance="ghost" block>
                        Back
                      </Button>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="show-col">
                      <Button
                        appearance="primary"
                        block
                        href="/123/session-join"
                      >
                        Join Room
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </ButtonToolbar>
          </div>

          <h6>Having trouble with your video?</h6>
        </div>
      </div>
    </>
  );
};
