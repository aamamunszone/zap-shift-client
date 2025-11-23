import React from 'react';
import notFound from '../../assets/images/not-found.png';
import Container from '../../components/common/Container/Container';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Container className=" bg-base-100 p-20 rounded-xl flex flex-col justify-center items-center gap-10">
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
