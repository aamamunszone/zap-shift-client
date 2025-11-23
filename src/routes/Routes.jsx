import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import Loader from '../components/common/Loader/Loader';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/data/warehouses.json').then((res) => res.json()),
      },
    ],
  },
]);
