import { createBrowserRouter, redirect } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import Loader from '../components/common/Loader/Loader';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import PrivateRoute from './PrivateRoute';
import BeARider from '../pages/BeARider/BeARider';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, loader: () => redirect('home') },
      { path: 'home', Component: Home },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/data/warehouses.json').then((res) => res.json()),
      },
      {
        path: 'be-a-rider',
        element: (
          <PrivateRoute>
            <BeARider />
          </PrivateRoute>
        ),
      },
      {
        path: 'about-us',
        Component: About,
      },
    ],
  },

  // AuthLayout Routes
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      { index: true, loader: () => redirect('login') },
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: 'forgot-password', Component: ForgotPassword },
    ],
  },

  // Not Found Route
  {
    path: '*',
    element: <NotFound />,
  },
]);
