import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../components/common/Loader/Loader';

const Payment = () => {
  const { parcelId } = useParams();

  const axiosPrivate = useAxiosSecure();

  const { data: parcel, isLoading } = useQuery({
    queryKey: ['parcels', parcelId],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosPrivate.post(
      '/create-checkout-session',
      paymentInfo
    );
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-base-100 rounded-xl p-10">
      <h2 className="text-4xl font-bold mb-10">
        Please Pay <span className="text-blue-500">$ {parcel.cost}</span> for{' '}
        <span className="text-green-500">"{parcel.parcelName}"</span>
      </h2>

      <div className="border border-gray-300 rounded-xl p-10">
        <button onClick={handlePayment} className="btn btn-primary text-black">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
