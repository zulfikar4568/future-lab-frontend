import React from 'react';
import {
  Avatar,
  Button,
  ButtonToolbar,
  Col,
  FlexboxGrid,
  Grid,
  Panel,
  Row,
} from 'rsuite';

interface IDataDetails {
  name: string;
  fromDate: string;
  toDate: string;
}

interface Props {
  data: IDataDetails[];
  title: string;
}

export const SessionList: React.FC<Props> = (props) => {
  return (
    <>
      <Panel header={props.title}>
        <FlexboxGrid justify="start" align="middle">
          {props.data.map((item, index) => (
            <FlexboxGrid.Item key={index} as={Col} colspan={24} md={11}>
              <div className="session-content">
                <Avatar
                  size="lg"
                  circle
                  src="https://avatars.githubusercontent.com/u/12592949"
                  alt="@SevenOutman"
                />

                <div className="session-content-information">
                  <h6>{item.name}</h6>
                  <p>
                    {item.fromDate} - {item.toDate}
                  </p>
                </div>
              </div>
              <div className="session-control">
                <ButtonToolbar>
                  <Grid fluid>
                    <Row gutter={24}>
                      <Col xs={12}>
                        <div className="show-col">
                          <Button appearance="subtle" block>
                            Reschedule
                          </Button>
                        </div>
                      </Col>
                      <Col xs={12}>
                        <div className="show-col">
                          <Button appearance="primary" block>
                            Join Room
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </ButtonToolbar>
              </div>
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
      </Panel>
    </>
  );
};
