import React from 'react';
import Container from '../../../../components/common/Container/Container';
import amazon from '../../../../assets/brands/amazon.png';
import casio from '../../../../assets/brands/casio.png';
import moonstar from '../../../../assets/brands/moonstar.png';
import randstad from '../../../../assets/brands/randstad.png';
import star from '../../../../assets/brands/star.png';
import starPeople from '../../../../assets/brands/start_people.png';
import Marquee from 'react-fast-marquee';
import liveTracking from '../../../../assets/images/live-tracking.png';
import safeDelivery from '../../../../assets/images/safe-delivery.png';
import callSupport from '../../../../assets/images/safe-delivery.png';
import narrowLineOverlap from '../../../../assets/images/be-a-merchant-bg.png';
import locationOverlap from '../../../../assets/images/location-merchant.png';
import { Link } from 'react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

const TrustedBy = () => {
  const brands = [
    {
      id: 1,
      name: 'Amazon',
      image: amazon,
    },
    {
      id: 2,
      name: 'Casio',
      image: casio,
    },
    {
      id: 3,
      name: 'MoonStar',
      image: moonstar,
    },
    {
      id: 4,
      name: 'RandStad',
      image: randstad,
    },
    {
      id: 5,
      name: 'Star',
      image: star,
    },
    {
      id: 6,
      name: 'StarPeople',
      image: starPeople,
    },
  ];

  const services = [
    {
      id: 1,
      title: 'Live Parcel Tracking',
      image: liveTracking,
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      title: '100% Safe Delivery',
      image: safeDelivery,
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    },
    {
      id: 3,
      title: '24/7 Call Center Support',
      image: callSupport,
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns-anytime you need us.',
    },
  ];

  return (
    <Container>
      <h2 className="text-center text-4xl font-bold text-secondary mb-10">
        We've helped thousands of sales teams
      </h2>
      <Marquee pauseOnHover={true} pauseOnClick={true}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="grid grid-cols-2 h-24 justify-between items-center cursor-pointer"
          >
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </Marquee>

      <div className="my-20 py-20 border-t-2 border-b-2 border-secondary border-dashed flex flex-col justify-between items-center gap-5 w-[90%] mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-base-100 rounded-xl p-8 flex justify-center items-stretch gap-12 w-full"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Vertical Line */}
            <div className="border-l-2 border-dashed h-26 border-secondary mx-4"></div>

            <div className="flex-1 flex-col gap-3">
              <h4 className="text-xl text-secondary font-bold">
                {service.title}
              </h4>
              <p className="text-[#606060]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-secondary w-[90%] mx-auto h-[500px] rounded-xl overflow-hidden">
        <img src={narrowLineOverlap} className="absolute" />
        <img
          src={locationOverlap}
          className="absolute top-1/2 -translate-y-1/2 right-20"
        />
        <div className="w-[60%] p-20">
          <h3 className="text-white text-4xl font-extrabold leading-relaxed tracking-wide mb-5">
            Merchant and Customer Satisfaction is Our First Priority
          </h3>
          <p className="text-[#DADADA] leading-relaxed w-[70%] mb-20">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex items-center gap-5">
            <Link
              to=""
              className="px-5 py-2 border border-primary text-secondary bg-primary rounded-full font-medium"
            >
              Become a Merchant
            </Link>
            <Link
              to=""
              className="px-5 py-2 text-primary border border-primary rounded-full font-medium flex justify-between items-center gap-2.5"
            >
              Earn with ZapShift Courier{' '}
              <span>
                <FaExternalLinkAlt />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrustedBy;
