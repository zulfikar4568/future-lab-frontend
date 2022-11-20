import React from 'react';
import ReactDOM from 'react-dom/client';
import './ui/assets/stylesheets/index.scss';
import 'rsuite/dist/rsuite.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './ui/routes';
import { Loading } from './ui/components/common/Loading';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </React.StrictMode>,
);
