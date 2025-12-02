import React, { useEffect } from 'react';
import Container from '../../components/common/Container/Container';
import riderImg from '../../assets/images/agent-pending.png';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const BeARider = () => {
  const { user } = useAuth();

  const wareHouses = useLoaderData();

  const axiosPrivate = useAxiosSecure();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const regionsDuplicate = wareHouses.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];
  //   console.log(regions);

  const riderRegion = useWatch({
    control,
    name: 'riderRegion',
  });

  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((r) => r.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  useEffect(() => {
    setValue('riderDistrict', '');
  }, [riderRegion, setValue]);

  const handleRiderSubmit = (data) => {
    console.log(data);

    axiosPrivate.post('/riders', data).then((res) => {
      console.log(res.data);

      if (res.data.insertedId) {
        navigate('/');

        Swal.fire({
          position: 'center',
          icon: 'success',
          title:
            'Your application has been submitted. We will reach to you in 24 hours.',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div className="mb-5">
      <title>ZapShift | Be A Rider</title>

      <Container className="bg-base-100 rounded-xl px-20 py-10">
        <h2 className="text-4xl text-[#03373D] font-extrabold mb-20">
          Be A Rider
        </h2>

        {/* Be A Rider */}
        <div>
          <p className="text-[#03373D] font-medium w-1/2">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          {/* Divider */}
          <div className="border-t border-gray-300 my-10"></div>

          <div className="flex justify-between items-center gap-20">
            {/* Form */}
            <div className="flex-1">
              <h3 className="text-2xl text-[#03373D] font-extrabold mb-6">
                Tell us about yourself
              </h3>

              <form onSubmit={handleSubmit(handleRiderSubmit)}>
                <div className="w-full space-y-5">
                  <div className="flex justify-between items-start w-full gap-10">
                    {/* Left Side */}
                    <div className="flex-1 space-y-5">
                      {/* Name */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your Name
                        </label>
                        <input
                          type="text"
                          {...register('riderName', {
                            required: {
                              value: true,
                              message: 'Rider name is required.',
                            },
                          })}
                          className="input w-full"
                          defaultValue={user?.displayName}
                          placeholder="Your Name"
                        />

                        {/* Error message */}
                        {errors.riderName && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderName.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your Email
                        </label>
                        <input
                          type="email"
                          {...register('riderEmail', {
                            required: {
                              value: true,
                              message: 'Rider email is required.',
                            },
                          })}
                          className="input w-full"
                          defaultValue={user?.email}
                          placeholder="Your Email"
                        />

                        {/* Error message */}
                        {errors.riderEmail && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderEmail.message}
                          </p>
                        )}
                      </div>

                      {/* Rider NID Number */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your NID No.
                        </label>
                        <input
                          type="number"
                          {...register('riderNID', {
                            required: {
                              value: true,
                              message: 'Rider NID number is required.',
                            },
                          })}
                          className="input w-full"
                          placeholder="Your NID No."
                        />

                        {/* Error message */}
                        {errors.riderNID && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderNID.message}
                          </p>
                        )}
                      </div>

                      {/* Rider Driving License Number */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your Driving License No.
                        </label>
                        <input
                          type="number"
                          {...register('riderDrivingLicense', {
                            required: {
                              value: true,
                              message:
                                'Rider driving license number is required.',
                            },
                          })}
                          className="input w-full"
                          placeholder="Your Driving License No."
                        />

                        {/* Error message */}
                        {errors.riderDrivingLicense && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderDrivingLicense.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 space-y-5">
                      {/* Rider Age */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your Age
                        </label>
                        <input
                          type="number"
                          {...register('riderAge', {
                            required: {
                              value: true,
                              message: 'Rider Age is required.',
                            },
                          })}
                          className="input w-full"
                          placeholder="Your Age"
                        />

                        {/* Error message */}
                        {errors.riderAge && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderAge.message}
                          </p>
                        )}
                      </div>

                      {/* Your Region */}
                      <div className="flex flex-col justify-between">
                        <label className="label pb-1 font-medium">
                          Your Region
                        </label>

                        <select
                          defaultValue=""
                          className="select w-full"
                          {...register('riderRegion', {
                            required: {
                              value: true,
                              message: 'Rider region is required.',
                            },
                          })}
                        >
                          <option value="" disabled>
                            Select Your Region
                          </option>
                          {regions.map((region, index) => (
                            <option key={index} value={region}>
                              {region}
                            </option>
                          ))}
                        </select>

                        {/* Error message */}
                        {errors.riderRegion && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderRegion.message}
                          </p>
                        )}
                      </div>

                      {/* Your District */}
                      <div className="flex flex-col justify-between">
                        <label className="label pb-1 font-medium">
                          Your District
                        </label>

                        <select
                          defaultValue=""
                          disabled={!riderRegion}
                          className="select w-full"
                          {...register('riderDistrict', {
                            required: {
                              value: true,
                              message: 'Rider district is required.',
                            },
                          })}
                        >
                          <option value="" disabled>
                            Select Your District
                          </option>
                          {riderRegion &&
                            districtByRegion(riderRegion).map(
                              (district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              )
                            )}
                        </select>

                        {/* Error message */}
                        {errors.riderDistrict && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderDistrict.message}
                          </p>
                        )}
                      </div>

                      {/* Rider Contact Number */}
                      <div>
                        <label className="label pb-1 font-medium">
                          Your Contact Number
                        </label>
                        <input
                          type="tel"
                          {...register('riderPhone', {
                            required: {
                              value: true,
                              message: 'Rider contact number is required.',
                            },
                          })}
                          className="input w-full"
                          placeholder="Your Contact Number"
                        />

                        {/* Error message */}
                        {errors.riderPhone && (
                          <p className="text-sm text-error py-1.5">
                            {errors.riderPhone.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Warehouse */}
                  <div className="flex flex-col justify-between">
                    <label className="label pb-1 font-medium">
                      Which warehouse you want to work ?
                    </label>

                    <select
                      defaultValue=""
                      className="select w-full"
                      {...register('warehouse', {
                        // required: {
                        //   value: true,
                        //   message: 'Warehouse selection is required.',
                        // },
                      })}
                    >
                      <option value="" disabled>
                        Select Warehouse
                      </option>
                      {/* {
                        districtByRegion(senderRegion).map(
                          (district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          )
                        )} */}
                    </select>

                    {/* Error message */}
                    {errors.warehouse && (
                      <p className="text-sm text-error py-1.5">
                        {errors.warehouse.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="w-full mt-10">
                    <button
                      type="submit"
                      className="btn btn-primary font-medium tracking-wide text-secondary w-full"
                    >
                      Apply as a Rider
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Image */}
            <div className="w-[40%]">
              <img src={riderImg} alt="Rider Image" className="w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BeARider;
