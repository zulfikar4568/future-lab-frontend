import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Root } from '../Root';
import { Home } from '../views/Home';
import { Login } from '../views/auth/Login';
import { Session } from '../views/Session';
import { SignUp } from '../views/auth/SignUp';
import { SignUpAbout } from '../views/auth/SignUpAbout';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/signin',
        element: <Login />,
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
        ],
      },
    ],
  },
]);
