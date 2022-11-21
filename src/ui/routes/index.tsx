import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Root } from '../Root';
import { Home } from '../views/mentor/Home';
import { SignIn } from '../views/auth/SignIn';
import { Session } from '../views/session/Session';
import { SignUp } from '../views/auth/SignUp';
import { SignUpAbout } from '../views/auth/SignUpAbout';
import { TermOfService } from '../views/TermOfService';
import { MentorDetail } from '../views/mentor/MentorDetail';
import { MentorSchedule } from '../views/mentor/MentorSchedule';
import { MentorStatus } from '../views/mentor/MentorStatus';
import { JoinSession } from '../views/session/JoinSession';
import { ExitedSession } from '../views/session/ExitedSession';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signup/about',
        element: <SignUpAbout />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/session',
            element: <Session />,
          },
          {
            path: '/:id/session-exited',
            element: <ExitedSession />,
          },
          {
            path: '/:id/session-join',
            element: <JoinSession />,
          },
          {
            path: '/term-of-service',
            element: <TermOfService />,
          },
          {
            path: '/:id/mentor-detail',
            element: <MentorDetail />,
          },
          {
            path: '/:id/mentor-schedule',
            element: <MentorSchedule />,
          },
          {
            path: '/:id/mentor-status',
            element: <MentorStatus />,
          },
        ],
      },
    ],
  },
]);
