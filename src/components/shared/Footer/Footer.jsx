import React from 'react';
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa6';
import Logo from '../../common/Logo/Logo';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-gray-300 py-16 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <Logo className="text-white" />

        {/* Tagline */}
        <p className="text-center max-w-2xl text-sm leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-[#1f3a3a] mt-6"></div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm mt-6">
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            Services
          </li>
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            Coverage
          </li>
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            About Us
          </li>
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            Pricing
          </li>
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            Blog
          </li>
          <li className="hover:text-white hover:underline underline-offset-4 transition">
            Contact
          </li>
        </ul>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-[#1f3a3a] mt-6"></div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6">
          <Link
            to=""
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-primary hover:text-black transition"
          >
            <FaLinkedinIn size={18} />
          </Link>
          <Link
            to=""
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-primary hover:text-black transition"
          >
            <FaXTwitter size={18} />
          </Link>
          <Link
            to=""
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-primary hover:text-black transition"
          >
            <FaFacebookF size={18} />
          </Link>
          <Link
            to=""
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-primary hover:text-black transition"
          >
            <FaYoutube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
