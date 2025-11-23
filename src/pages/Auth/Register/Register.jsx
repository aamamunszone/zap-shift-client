import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
      <p className="text-center mb-6 text-gray-500">
        Join us and start your journey
      </p>

      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="label pb-1 font-medium">Full Name</label>
          <input
            type="text"
            {...register('name', { required: true, maxLength: 20 })}
            placeholder="Enter your full name"
            className="input w-full"
          />
          {errors.name?.type === 'required' && (
            <p className="text-sm text-error py-1.5">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label pb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Enter your email"
            className="input w-full"
          />
          {errors.email?.type === 'required' && (
            <p className="text-sm text-error py-1.5">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="label pb-1 font-medium">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
            })}
            placeholder="Enter password"
            className="input w-full"
          />
          {errors.password?.type === 'required' && (
            <p className="text-sm text-error py-1.5">Password is required</p>
          )}

          {errors.password?.type === 'minLength' && (
            <p className="text-sm text-error py-1.5">
              Password should be 6 characters
            </p>
          )}

          {errors.password?.type === 'pattern' && (
            <p className="text-sm text-error py-1.5">
              Password must contain at least 1 letter and 1 number
            </p>
          )}
          <label className="label pt-2 text-sm">
            <Link
              to="/forgot-password"
              className="hover:underline underline-offset-4 text-secondary"
            >
              Forgot password?
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary font-medium tracking-wide text-secondary w-full mt-2"
        >
          Register
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Google Register */}
      <button
        type="submit"
        className="btn w-full bg-white border border-gray-300 hover:bg-gray-100 flex items-center gap-2"
      >
        <FcGoogle size={22} />
        <span className="font-medium">Sign up with Google</span>
      </button>

      {/* Already have account */}
      <p className="text-center text-sm mt-6">
        Already have an account?{' '}
        <Link
          to="../login"
          className="hover:underline underline-offset-4 text-blue-500 hover:text-blue-600 font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
