import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // intercept request
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // interceptor response
    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);

        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          signOutUser().then(() => {
            navigate('/auth');
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, navigate, signOutUser]);

  return instance;
};

export default useAxiosSecure;
