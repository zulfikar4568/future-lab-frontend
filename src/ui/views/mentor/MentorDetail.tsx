import { Avatar, Button } from 'rsuite';
import { BackButton } from '../../components/common/BackButton';

export const MentorDetail: React.FC = () => {
  return (
    <>
      <div className="container mentor-detail">
        <BackButton urlBack={'/'} title={'Back'} />
        <div className="mentor-detail-control">
          <Avatar
            size="lg"
            circle
            src="https://avatars.githubusercontent.com/u/12592949"
            alt="@SevenOutman"
          />
          <h4>Zulfikar Isnaen</h4>
          <Button appearance="primary" block href="/12/mentor-schedule">
            Schedule a call
          </Button>
        </div>
        <div className="mentor-detail-info">
          <h6>About me</h6>
          <p>
            Hi There! My Goal is to learn new and exciting stuff. I'm looking to
            join a brand new company and home my own personal skills
          </p>
        </div>
      </div>
    </>
  );
};
