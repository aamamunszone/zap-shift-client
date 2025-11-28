import React, { useEffect } from 'react';
import Container from '../../components/common/Container/Container';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {
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

  const senderRegion = useWatch({
    control,
    name: 'senderRegion',
  });

  const receiverRegion = useWatch({
    control,
    name: 'receiverRegion',
  });

  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((r) => r.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  useEffect(() => {
    setValue('senderDistrict', '');
  }, [senderRegion, setValue]);

  useEffect(() => {
    setValue('receiverDistrict', '');
  }, [receiverRegion, setValue]);

  const handleParcelSubmit = (data) => {
    console.log(data);
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = Math.max(0, parseFloat(data.parcelWeight) || 0);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = Math.max(0, parcelWeight - 3);
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log('cost : ', cost);
    data.cost = cost;

    Swal.fire({
      title: 'Agree with the cost ?',
      text: `You have to pay ${cost} Tk.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it !',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate.post('/parcels', data).then((res) => {
          console.log(res.data);

          if (res.data.insertedId) {
            navigate('/dashboard/my-parcels');

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Parcel has created. Please Pay',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="mb-5">
      <title>ZapShift | Send a Parcel</title>

      <Container className="bg-base-100 rounded-xl px-20 py-10">
        <h2 className="text-4xl text-[#03373D] font-extrabold mb-20">
          Send A Parcel
        </h2>

        {/* Send Parcel */}
        <div>
          {/* Parcel Details */}
          <div>
            <h3 className="text-2xl text-[#03373D] font-extrabold">
              Enter your parcel details
            </h3>
            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>
            <div>
              {/* Parcel Type */}
              <div className="flex justify-start items-center gap-5">
                <label className="label font-bold">
                  <input
                    type="radio"
                    value="document"
                    {...register('parcelType')}
                    className="radio radio-success"
                    defaultChecked
                  />
                  Document
                </label>
                <label className="label font-bold">
                  <input
                    type="radio"
                    value="non-document"
                    {...register('parcelType')}
                    className="radio radio-success"
                  />
                  Non-Document
                </label>
              </div>
              {/* Parcel Info */}
              <div className="flex justify-between items-start gap-20 mt-6">
                <div className="flex-1">
                  <label className="label pb-1 font-medium">Parcel Name</label>
                  <input
                    type="text"
                    {...register('parcelName', {
                      required: {
                        value: true,
                        message: 'Parcel name is required.',
                      },
                    })}
                    className="input w-full"
                    placeholder="Parcel Name"
                  />

                  {/* Error message */}
                  {errors.parcelName && (
                    <p className="text-sm text-error py-1.5">
                      {errors.parcelName.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="label pb-1 font-medium">
                    Parcel Weight (KG)
                  </label>
                  <input
                    type="number"
                    {...register('parcelWeight', {
                      required: {
                        value: true,
                        message: 'Parcel weight is required.',
                      },
                      min: {
                        value: 0,
                        message: 'Parcel weight must be at least 0.',
                      },
                    })}
                    className="input w-full"
                    placeholder="Parcel Weight (KG)"
                  />

                  {/* Error message */}
                  {errors.parcelWeight && (
                    <p className="text-sm text-error py-1.5">
                      {errors.parcelWeight.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Sender & Receiver Information Form */}
          <form onSubmit={handleSubmit(handleParcelSubmit)}>
            <div className="flex justify-between items-start gap-20">
              {/* Sender Info */}
              <div className="flex-1">
                <h4 className="text-xl text-[#03373D] font-bold mb-10">
                  Sender Details
                </h4>
                {/* Form */}
                <div className="flex flex-col justify-between gap-5">
                  {/* Name */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      {...register('senderName', {
                        required: {
                          value: true,
                          message: 'Sender name is required.',
                        },
                      })}
                      className="input w-full"
                      defaultValue={user?.displayName}
                      placeholder="Sender Name"
                    />

                    {/* Error message */}
                    {errors.senderName && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Sender Email
                    </label>
                    <input
                      type="email"
                      {...register('senderEmail', {
                        required: {
                          value: true,
                          message: 'Sender email is required.',
                        },
                      })}
                      className="input w-full"
                      defaultValue={user?.email}
                      readOnly
                      placeholder="Sender Email"
                    />

                    {/* Error message */}
                    {errors.senderEmail && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderEmail.message}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="label pb-1 font-medium">Address</label>
                    <input
                      type="text"
                      {...register('senderAddress', {
                        required: {
                          value: true,
                          message: 'Sender Address is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Address"
                    />

                    {/* Error message */}
                    {errors.senderAddress && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderAddress.message}
                      </p>
                    )}
                  </div>

                  {/* Sender Contact Number */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Sender Contact Number
                    </label>
                    <input
                      type="tel"
                      {...register('senderPhone', {
                        required: {
                          value: true,
                          message: 'Sender contact number is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Sender Contact Number"
                    />

                    {/* Error message */}
                    {errors.senderPhone && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderPhone.message}
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
                      {...register('senderRegion', {
                        required: {
                          value: true,
                          message: 'Sender region is required.',
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
                    {errors.senderRegion && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderRegion.message}
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
                      disabled={!senderRegion}
                      className="select w-full"
                      {...register('senderDistrict', {
                        required: {
                          value: true,
                          message: 'Sender district is required.',
                        },
                      })}
                    >
                      <option value="" disabled>
                        Select Your District
                      </option>
                      {senderRegion &&
                        districtByRegion(senderRegion).map(
                          (district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          )
                        )}
                    </select>

                    {/* Error message */}
                    {errors.senderDistrict && (
                      <p className="text-sm text-error py-1.5">
                        {errors.senderDistrict.message}
                      </p>
                    )}
                  </div>

                  {/* Pickup Instruction */}
                  <div className="flex flex-col justify-between">
                    <label className="label pb-1 font-medium">
                      Pickup Instruction (Optional)
                    </label>
                    <textarea
                      {...register('pickupInstruction')}
                      className="textarea w-full"
                      placeholder="Pickup Instruction"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Receiver Info */}
              <div className="flex-1">
                <h4 className="text-xl text-[#03373D] font-bold mb-10">
                  Receiver Details
                </h4>
                {/* Form */}
                <div className="flex flex-col justify-between gap-5">
                  {/* Name */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Receiver Name
                    </label>
                    <input
                      type="text"
                      {...register('receiverName', {
                        required: {
                          value: true,
                          message: 'Receiver name is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Receiver Name"
                    />

                    {/* Error message */}
                    {errors.receiverName && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Receiver Email
                    </label>
                    <input
                      type="email"
                      {...register('receiverEmail', {
                        required: {
                          value: true,
                          message: 'Receiver email is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Receiver Email"
                    />

                    {/* Error message */}
                    {errors.receiverEmail && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverEmail.message}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="label pb-1 font-medium">Address</label>
                    <input
                      type="text"
                      {...register('receiverAddress', {
                        required: {
                          value: true,
                          message: 'Receiver address is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Address"
                    />

                    {/* Error message */}
                    {errors.receiverAddress && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverAddress.message}
                      </p>
                    )}
                  </div>

                  {/* Receiver Contact Number */}
                  <div>
                    <label className="label pb-1 font-medium">
                      Receiver Contact Number
                    </label>
                    <input
                      type="tel"
                      {...register('receiverPhone', {
                        required: {
                          value: true,
                          message: 'Receiver contact number is required.',
                        },
                      })}
                      className="input w-full"
                      placeholder="Receiver Contact Number"
                    />

                    {/* Error message */}
                    {errors.receiverPhone && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverPhone.message}
                      </p>
                    )}
                  </div>

                  {/* Receiver Region */}
                  <div className="flex flex-col justify-between">
                    <label className="label pb-1 font-medium">
                      Receiver Region
                    </label>

                    <select
                      defaultValue=""
                      className="select w-full"
                      {...register('receiverRegion', {
                        required: {
                          value: true,
                          message: 'Receiver region is required.',
                        },
                      })}
                    >
                      <option value="" disabled>
                        Select Receiver Region
                      </option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>

                    {/* Error message */}
                    {errors.receiverRegion && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverRegion.message}
                      </p>
                    )}
                  </div>

                  {/* Receiver District */}
                  <div className="flex flex-col justify-between">
                    <label className="label pb-1 font-medium">
                      Receiver District
                    </label>

                    <select
                      defaultValue=""
                      disabled={!receiverRegion}
                      className="select w-full"
                      {...register('receiverDistrict', {
                        required: {
                          value: true,
                          message: 'Receiver district is required.',
                        },
                      })}
                    >
                      <option value="" disabled>
                        Select Receiver District
                      </option>
                      {receiverRegion &&
                        districtByRegion(receiverRegion).map(
                          (district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          )
                        )}
                    </select>

                    {/* Error message */}
                    {errors.receiverDistrict && (
                      <p className="text-sm text-error py-1.5">
                        {errors.receiverDistrict.message}
                      </p>
                    )}
                  </div>

                  {/* Delivery Instruction */}
                  <div className="flex flex-col justify-between">
                    <label className="label pb-1 font-medium">
                      Delivery Instruction (Optional)
                    </label>
                    <textarea
                      {...register('deliveryInstruction')}
                      className="textarea w-full"
                      placeholder="Delivery Instruction"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <p className="my-10">
              <span className="text-warning font-bold">*</span> PickUp Time
              4pm-7pm Approx.
            </p>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary font-medium tracking-wide text-secondary"
              >
                Proceed to Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SendParcel;
