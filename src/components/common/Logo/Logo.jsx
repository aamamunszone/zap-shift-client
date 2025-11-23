import React from 'react';
import logoImage from '../../../assets/logos/zap-shift-logo.png';
import { Link } from 'react-router';

const Logo = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex ${className}`}>
      <img
        src={logoImage}
        alt="ZapShift Logo"
        className="w-full h-full object-cover"
      />
      <h1 className="flex items-end font-bold text-3xl tracking-wide -ms-2.5">
        ZapShift
      </h1>
    </Link>
  );
};

export default Logo;
