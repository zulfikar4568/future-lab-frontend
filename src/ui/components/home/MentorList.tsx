import React from 'react';
import { Avatar, Col, FlexboxGrid, Panel } from 'rsuite';

interface Props {
  name: string[];
  title: string;
}

export const MentorList: React.FC<Props> = (props) => {
  return (
    <>
      <Panel header={props.title}>
        <FlexboxGrid justify="start" align="middle">
          {props.name.map((item, index) => (
            <FlexboxGrid.Item key={index} as={Col} colspan={24} md={12}>
              <div className="mentor-content">
                <Avatar
                  size="lg"
                  circle
                  src="https://avatars.githubusercontent.com/u/12592949"
                  alt="@SevenOutman"
                />

                <h6>{item}</h6>
              </div>
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
      </Panel>
    </>
  );
};
