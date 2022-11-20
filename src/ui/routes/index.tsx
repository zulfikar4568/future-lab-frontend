import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Root } from '../Root';
import { Home } from '../views/mentor/Home';
import { SignIn } from '../views/auth/SignIn';
import { Session } from '../views/Session';
import { SignUp } from '../views/auth/SignUp';
import { SignUpAbout } from '../views/auth/SignUpAbout';
import { TermOfService } from '../views/TermOfService';
import { MentorDetail } from '../views/mentor/MentorDetail';
import { MentorSchedule } from '../views/mentor/MentorSchedule';
import { MentorStatus } from '../views/mentor/MentorStatus';

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
