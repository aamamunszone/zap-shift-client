import React from 'react';
import { Link } from 'react-router';
import PaymentCancel from '../../../../../assets/images/payment-cancelled.jpg';

const PaymentCancelled = () => {
  return (
    <div className="min-h-screen bg-base-100 p-20 rounded-xl flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-bold mb-10">Payment Cancelled</h2>

      <div>
        <img
          className="w-[400px] h-[400px]"
          src={PaymentCancel}
          alt="Payment Cancelled"
        />
      </div>
      <div>
        <Link
          to="/"
          className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancelled;
