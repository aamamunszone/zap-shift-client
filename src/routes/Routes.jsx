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
import SendParcel from '../pages/SendParcel/SendParcel';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import MyParcels from '../pages/Dashboard/MyParcels/MyParcels';
import Payment from '../pages/Dashboard/Payment/Payment';
import PaymentSuccess from '../pages/Dashboard/Payment/components/PaymentSuccess/PaymentSuccess';
import PaymentCancelled from '../pages/Dashboard/Payment/components/PaymentCancelled/PaymentCancelled';

export const router = createBrowserRouter([
  // Main Layout Routes
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, loader: () => redirect('home') },
      { path: 'home', Component: Home },
      {
        path: 'coverage',
        element: (
          <PrivateRoute>
            <Coverage />
          </PrivateRoute>
        ),
        loader: () => fetch('/data/warehouses.json').then((res) => res.json()),
      },
      {
        path: 'send-parcel',
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
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

  // Dashboard Layout Routes
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: 'my-parcels', Component: MyParcels },
      { path: 'payment/:parcelId', Component: Payment },
      { path: 'payment-success', Component: PaymentSuccess },
      { path: 'payment-cancelled', Component: PaymentCancelled },
    ],
  },

  // Auth Layout Routes
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
