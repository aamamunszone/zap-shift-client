import React from 'react';
import Container from '../../common/Container/Container';
import { Link } from 'react-router';
import Logo from '../../common/Logo/Logo';
import NavItem from './NavItem/NavItem';

const Header = () => {
  const navItems = [
    { path: '/home', label: 'Home', public: true },
    { path: '/services', label: 'Services', public: true },
    { path: '/coverage', label: 'Coverage', private: true },
    { path: '/pricing', label: 'Pricing', public: true },
    { path: '/be-a-rider', label: 'Be a Rider', private: true },
    { path: '/about-us', label: 'About Us', public: true },
  ];

  const filteredNavItems = navItems.filter(
    (item) => item.public || item.private // when user comes then change the condition
  );

  return (
    <Container className="sticky top-6 z-50 my-6 bg-base-100/70 backdrop-blur-sm rounded-xl px-8 py-5 w-full">
      <div className="navbar p-0 min-h-0">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">
            {filteredNavItems.map(({ path, label }) => (
              <NavItem key={path} path={path}>
                {label}
              </NavItem>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end gap-2.5">
          <Link className="px-5 py-2 text-[#606060] border border-[#DADADA] rounded-md font-medium">
            Sign In
          </Link>
          <Link className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-medium">
            Be a Rider
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
