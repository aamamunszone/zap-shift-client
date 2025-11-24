import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { firebaseErrorMessage } from '../../../utils/firebaseErrors';
import axios from 'axios';

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterSubmit = async (data) => {
    // console.log(data);
    const userName = data.name;
    const userImage = data.image[0];

    try {
      const userCredential = await createUser(data.email, data.password);

      // Prepare form data for ImgBB
      const formData = new FormData();
      formData.append('image', userImage);

      // Upload to ImgBB using Axios
      const ImgBB_API_URL = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_APIKEY
      }`;

      const res = await axios.post(ImgBB_API_URL, formData);
      // console.log('after image upload', res);
      const imageURL = res.data.data.display_url;

      // Update Firebase User profile with UserName and image URL
      await updateUserProfile({
        displayName: userName,
        photoURL: imageURL,
      });

      const user = userCredential.user;
      // console.log(user);
      toast.success(
        `Congratulations ${
          user?.displayName || 'User'
        }! 🎉 Registration successful.`
      );
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      console.log(error.message);
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
        }! 🎉 Registration successful with Google.`
      );
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      // console.log(errorMessage);
      toast.error(errorMessage);
    }
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
            {...register('name', {
              required: {
                value: true,
                message: 'Full name is required.',
              },
              maxLength: {
                value: 30,
                message: 'Full name cannot exceed 30 characters.',
              },
            })}
            placeholder="Enter your full name"
            className="input w-full"
          />
          {errors.name && (
            <p className="text-sm text-error py-1.5">{errors.name.message}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="label pb-1 font-medium">Image</label>
          <input
            type="file"
            {...register('image', {
              required: {
                value: true,
                message: 'Image file is required.',
              },
            })}
            className="file-input w-full"
          />
          <label className="label pt-2 text-xs">Max size 2MB</label>
          {errors.image && (
            <p className="text-sm text-error py-1.5">{errors.image.message}</p>
          )}
        </div>

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
              validate: {
                hasUppercase: (value) =>
                  /[A-Z]/.test(value) ||
                  'Must include at least one uppercase letter.',
                hasLowercase: (value) =>
                  /[a-z]/.test(value) ||
                  'Must include at least one lowercase letter.',
                hasNumber: (value) =>
                  /\d/.test(value) || 'Must include at least one number.',
                hasSpecial: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  'Must include at least one special character.',
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
        onClick={handleGoogleSignIn}
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
          state={location.state}
          className="hover:underline underline-offset-4 text-blue-500 hover:text-blue-600 font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
