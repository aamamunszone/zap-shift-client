import React from 'react';
import authImage from '../../assets/images/authImage.png';
import { Outlet } from 'react-router';
import Logo from '../../components/common/Logo/Logo';

const AuthLayout = () => {
  return (
    <div className="flex justify-between items-center min-h-screen bg-[#FAFDF0]">
      {/* Left Section */}
      <div className="flex-1 bg-base-100 min-h-screen p-20 flex flex-col justify-between gap-10">
        {/* Logo */}
        <div className="flex justify-start items-start">
          <Logo className="text-[#303030]" />
        </div>
        {/* Outlet */}
        <div className="flex-1 flex justify-center items-center">
          <Outlet />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[40%] flex justify-center items-center">
        <img src={authImage} alt="Auth Image" />
      </div>
    </div>
  );
};

export default AuthLayout;
