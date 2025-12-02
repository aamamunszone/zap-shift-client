import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const PaymentHistory = () => {
  const { user } = useAuth();

  const axiosPrivate = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="bg-base-100 rounded-xl p-10">
      <h2 className="text-4xl font-bold mb-10">
        Payment History : {payments.length}
      </h2>

      <div className="overflow-x-auto border border-gray-300 rounded-xl p-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Parcel Info</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.parcelName}</td>
                <td>{payment.trackingId}</td>
                <td>
                  <span>{payment.amount} </span>
                  {payment.paymentStatus === 'paid' ? (
                    <>
                      <span>(Paid)</span> <br /> <span>{payment.paidAt}</span>
                    </>
                  ) : (
                    <span>(Unpaid)</span>
                  )}
                </td>
                <td>
                  <div className="flex justify-start items-center gap-5">
                    <button className="btn btn-square hover:bg-primary">
                      <FaMagnifyingGlass />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
