import { createBrowserRouter, redirect } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import Loader from '../components/common/Loader/Loader';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, loader: () => redirect('/home') },
      { path: 'home', Component: Home },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/data/warehouses.json').then((res) => res.json()),
      },
      {
        path: 'about-us',
        Component: About,
      },
    ],
  },

  // Not Found Route
  {
    path: '*',
    element: <NotFound />,
  },
]);
