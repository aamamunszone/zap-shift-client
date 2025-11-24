import React from 'react';
import Container from '../../common/Container/Container';
import { Link } from 'react-router';
import Logo from '../../common/Logo/Logo';
import NavItem from './NavItem/NavItem';
import useAuth from '../../../hooks/useAuth';
import Loader from '../../common/Loader/Loader';
import { firebaseErrorMessage } from '../../../utils/firebaseErrors';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, loading, signOutUser } = useAuth();

  if (loading) {
    return <Loader />;
  }

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('Successfully logged out! 👋');
    } catch (error) {
      const errorMessage = firebaseErrorMessage(error.code);
      // console.log(errorMessage);
      toast.error(errorMessage);
    }
  };

  const navItems = [
    { path: '/home', label: 'Home', public: true },
    { path: '/services', label: 'Services', public: true },
    { path: '/coverage', label: 'Coverage', public: true },
    { path: '/pricing', label: 'Pricing', public: true },
    { path: '/be-a-rider', label: 'Be a Rider', public: true },
    { path: '/about-us', label: 'About Us', public: true },
  ];

  const filteredNavItems = navItems.filter(
    (item) => item.public || (item.private && user)
  );

  return (
    <Container className="bg-base-100/80 backdrop-blur-sm rounded-xl px-8 py-5 w-full">
      <div className="navbar p-0 min-h-0">
        {/* Logo */}
        <div className="navbar-start">
          <Logo className="text-[#303030]" />
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
          {user ? (
            <>
              <div className="w-10 h-10 rounded-full overflow-hidden border border-green-500 p-0.5">
                <img
                  src={user?.photoURL}
                  className="rounded-full"
                  alt={user?.displayName}
                  title={user?.displayName}
                />
              </div>
              <button
                onClick={handleSignOut}
                className="px-5 py-2 text-[#606060] border border-[#DADADA] rounded-md font-medium cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="px-5 py-2 text-[#606060] border border-[#DADADA] rounded-md font-medium"
            >
              Sign In
            </Link>
          )}
          <Link className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-medium">
            Be a Rider
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
