import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { firebaseErrorMessage } from '../../../utils/firebaseErrors';

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = async (data) => {
    // console.log(data);
    try {
      const userCredential = await signInUser(data.email, data.password);
      const user = userCredential.user;
      // console.log(user);
      toast.success(
        `Congratulations ${user?.displayName || 'User'}! 🎉 Login successful.`
      );
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      // console.log(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await googleSignIn();
      const user = userCredential.user;
      // console.log(user);
      toast.success(
        `Congratulations ${
          user?.displayName || 'User'
        }! 🎉 Login successful with Google.`
      );
      navigate(location.state?.from?.pathname || '/');
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      // console.log(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-center mb-6 text-gray-500">
        Login to continue your journey
      </p>

      <form onSubmit={handleSubmit(handleLoginSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="label pb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email address is required.',
              },
            })}
            placeholder="Enter your email"
            className="input w-full"
          />
          {errors.email && (
            <p className="text-sm text-error py-1.5">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="label pb-1 font-medium">Password</label>
          <input
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required.',
              },
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters.',
              },
            })}
            placeholder="Enter password"
            className="input w-full"
          />
          {errors.password && (
            <p className="text-sm text-error py-1.5">
              {errors.password.message}
            </p>
          )}
          <label className="label pt-2 text-sm">
            <Link
              to="/auth/forgot-password"
              className="hover:underline underline-offset-4 text-secondary"
            >
              Forgot password?
            </Link>
          </label>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="btn btn-primary font-medium tracking-wide text-secondary w-full mt-2"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2"
      >
        <FcGoogle size={22} />
        <span className="font-medium">Sign in with Google</span>
      </button>

      {/* Create account */}
      <p className="text-center text-sm mt-6">
        Don't have an account?{' '}
        <Link
          to="../register"
          state={location.state}
          className="hover:underline underline-offset-4 text-blue-500 hover:text-blue-600 font-medium"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
