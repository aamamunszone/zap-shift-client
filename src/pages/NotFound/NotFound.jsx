import React from 'react';
import notFound from '../../assets/images/not-found.png';
import Container from '../../components/common/Container/Container';
import { Link, useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Container className="relative bg-base-100 p-20 rounded-xl flex flex-col justify-center items-center gap-10">
        <div className="absolute top-5 left-5">
          <button
            className="flex justify-between items-center gap-2.5 px-5 py-2 text-[#606060] font-medium cursor-pointer hover:-translate-x-1.5 transition-all duration-400"
            onClick={() => navigate(-1)}
          >
            {' '}
            <span>
              <FaArrowLeft />
            </span>
            Go Back
          </button>
        </div>
        <div>
          <img src={notFound} alt="Not Found" />
        </div>
        <div>
          <Link
            to="/"
            className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-medium"
          >
            Go Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
