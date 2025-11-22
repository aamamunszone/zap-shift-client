import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
  },
]);
