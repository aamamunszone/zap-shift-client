import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const MyParcels = () => {
  const { user } = useAuth();

  const axiosPrivate = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ['myParcels', user?.email],
    queryFn: async () => {
      const res = await axiosPrivate.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount) {
            // refresh the date in the ui by tanstack query
            refetch();

            Swal.fire({
              title: 'Deleted!',
              text: 'Your parcel has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
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
    window.location.assign(res.data.url);
  };

  return (
    <div className="bg-base-100 rounded-xl p-10">
      <h2 className="text-4xl font-bold mb-10">
        All of my parcels : {parcels.length}
      </h2>

      <div className="overflow-x-auto border border-gray-300 rounded-xl p-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === 'paid' ? (
                    <span className="text-black bg-green-500 btn btn-primary btn-sm">
                      Paid
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary btn-sm text-black"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <div className="flex justify-start items-center gap-5">
                    <button className="btn btn-square hover:bg-primary">
                      <FaMagnifyingGlass />
                    </button>
                    <button className="btn btn-square hover:bg-primary">
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-square hover:bg-primary"
                    >
                      <FaTrashCan />
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

export default MyParcels;
