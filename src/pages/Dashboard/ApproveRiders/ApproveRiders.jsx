import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrashCan, FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';

const ApproveRiders = () => {
  const axiosPrivate = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosPrivate.get('/riders');
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.riderEmail };
    axiosPrivate.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Rider status is set to ${status}.`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, 'approved');
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, 'rejected');
  };

  const handleRemoval = (rider) => {
    updateRiderStatus(rider, 'removed');
  };

  return (
    <div className="bg-base-100 rounded-xl p-10">
      <h2 className="text-4xl font-bold mb-10">
        Riders Pending Approval : {riders.length}
      </h2>

      <div className="overflow-x-auto border border-gray-300 rounded-xl p-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Rider Name</th>
              <th>Rider Email</th>
              <th>Rider Status</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.riderEmail}</td>
                <td>
                  {
                    {
                      pending: (
                        <span className="badge badge-info">Pending</span>
                      ),
                      approved: (
                        <span className="badge badge-success">Approved</span>
                      ),
                      rejected: (
                        <span className="badge badge-error">Rejected</span>
                      ),
                      removed: (
                        <span className="badge badge-neutral">Removed</span>
                      ),
                    }[rider.status]
                  }
                </td>
                <td>
                  <>
                    <span>Region: {rider.riderRegion}</span> <br />{' '}
                    <span>District: {rider.riderDistrict}</span>
                  </>
                </td>
                <td>
                  <div className="flex justify-start items-center gap-5">
                    <button
                      onClick={() => handleApproval(rider)}
                      className="btn btn-circle text-black"
                    >
                      <FaUserCheck />
                    </button>
                    <button
                      onClick={() => handleRejection(rider)}
                      className="btn btn-circle text-black"
                    >
                      <IoPersonRemoveSharp />
                    </button>
                    <button
                      onClick={() => handleRemoval(rider)}
                      className="btn btn-circle text-black"
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

export default ApproveRiders;
