import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ path, children, className = '' }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `px-4 py-1.5 rounded-md font-medium transition-all duration-300 ease-in-out ${
            isActive ? 'bg-primary' : 'hover:bg-base-300'
          } ${className}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
