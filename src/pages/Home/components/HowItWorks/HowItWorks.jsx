import React from 'react';
import Container from '../../../../components/common/Container/Container';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiPayMoney } from 'react-icons/gi';
import { GoOrganization } from 'react-icons/go';
import { TbTruckDelivery } from 'react-icons/tb';

const HowItWorks = () => {
  const HowItWorksCards = [
    {
      icon: <CiDeliveryTruck />,
      title: 'Booking Pick & Drop',
      description:
        'From personal packages to business shipments - we deliver on time, every time.',
    },
    {
      icon: <GiPayMoney />,
      title: 'Cash On Delivery',
      description:
        'From personal packages to business shipments - we deliver on time, every time.',
    },
    {
      icon: <GoOrganization />,
      title: 'Delivery Hub',
      description:
        'From personal packages to business shipments - we deliver on time, every time.',
    },
    {
      icon: <TbTruckDelivery />,
      title: 'Booking SME & Corporate',
      description:
        'From personal packages to business shipments - we deliver on time, every time.',
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-4xl font-bold text-secondary mb-10">
        How It Works
      </h2>
      <div className="grid grid-cols-4 gap-8">
        {HowItWorksCards.map((card) => (
          <div className="bg-base-100 rounded-md p-6 flex flex-col justify-between gap-2.5 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <span className="text-6xl">{card.icon}</span>
            <h3 className="text-xl text-secondary font-bold">{card.title}</h3>
            <p className="text-[#606060]">{card.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
