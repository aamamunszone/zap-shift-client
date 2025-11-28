import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import paymentSuccess from '../../../../../assets/images/payment-success.jpg';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const axiosPrivate = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get('session_id');
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosPrivate
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosPrivate]);

  return (
    <div className="min-h-screen bg-base-100 p-20 rounded-xl flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-bold">Payment Successful</h2>
      <div>
        <p className="text-lg text-gray-500">
          Your Transaction ID:{' '}
          <span className="font-bold text-black">
            {paymentInfo.transactionId}
          </span>
        </p>
        <p className="text-lg text-gray-500">
          Your Tracking ID:{' '}
          <span className="font-bold text-black">{paymentInfo.trackingId}</span>
        </p>
      </div>

      <div>
        <img
          className="w-[400px] h-[400px]"
          src={paymentSuccess}
          alt="Payment Success"
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

export default PaymentSuccess;
