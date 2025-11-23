import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="w-full max-w-md bg-base-100 shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
      <p className="text-center mb-6 text-gray-500">
        Login to continue your journey
      </p>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="label pb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input w-full"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label pb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="input w-full"
          />
          <label className="label pt-2 text-sm">
            <Link
              to="/forgot-password"
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
      <button className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
        <FcGoogle size={22} />
        <span className="font-medium">Sign in with Google</span>
      </button>

      {/* Create account */}
      <p className="text-center text-sm mt-6">
        Don't have an account?{' '}
        <Link
          to="../register"
          className="hover:underline underline-offset-4 text-blue-500 hover:text-blue-600 font-medium"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
