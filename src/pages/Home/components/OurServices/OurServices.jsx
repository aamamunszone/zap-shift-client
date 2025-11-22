import React from 'react';
import Container from '../../../../components/common/Container/Container';
import { TbTruckDelivery } from 'react-icons/tb';

const OurServices = () => {
  const OurServicesCards = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      title: 'Express  & Standard Delivery',
      description:
        'We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.',
    },
    {
      id: 2,
      icon: <TbTruckDelivery />,
      title: 'Nationwide Delivery',
      description:
        'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.',
    },
    {
      id: 3,
      icon: <TbTruckDelivery />,
      title: 'Fulfillment Solution',
      description:
        'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
    },
    {
      id: 4,
      icon: <TbTruckDelivery />,
      title: 'Cash on Home Delivery',
      description:
        '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    },
    {
      id: 5,
      icon: <TbTruckDelivery />,
      title: 'Corporate Service / Contract In Logistics',
      description:
        'Customized corporate services which includes warehouse and inventory management support.',
    },
    {
      id: 6,
      icon: <TbTruckDelivery />,
      title: 'Parcel Return',
      description:
        'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
    },
  ];

  return (
    <Container className="bg-secondary px-40 py-20 rounded-xl">
      <h2 className="text-center text-4xl font-bold mb-10 text-white">
        Our Services
      </h2>
      <p className="text-center text-[#DADADA] mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments - we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-3 gap-8">
        {OurServicesCards.map((card) => (
          <div
            key={card.id}
            className="bg-base-100 rounded-xl p-6 flex flex-col justify-start items-center gap-2.5 hover:bg-primary hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <span className="text-6xl">{card.icon}</span>
            <h3 className="text-xl text-secondary font-bold">{card.title}</h3>
            <p className="text-[#606060]">{card.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurServices;
