import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { firebaseErrorMessage } from '../../../utils/firebaseErrors';
import { Link } from 'react-router';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgotPasswordSubmit = async (data) => {
    // console.log(data)
    try {
      await resetPassword(data.email);
      toast.success('Password reset link has been sent to your email.');
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      // console.log(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full max-w-md bg-base-100 shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-2">Forgot Password</h2>
      <p className="text-center mb-6 text-gray-500">
        Enter your email address and we'll send you a reset link.
      </p>

      <form
        onSubmit={handleSubmit(handleForgotPasswordSubmit)}
        className="space-y-5"
      >
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

        {/* Login Button */}
        <button
          type="submit"
          className="btn btn-primary font-medium tracking-wide text-secondary w-full mt-2"
        >
          Send
        </button>

        {/* Remember Password */}
        <p className="text-center text-sm mt-6">
          Remember your password?{' '}
          <Link
            to="../login"
            state={location.state}
            className="hover:underline underline-offset-4 text-blue-500 hover:text-blue-600 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
