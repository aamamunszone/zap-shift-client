import React from 'react';
import Container from '../../../../components/common/Container/Container';
import amazon from '../../../../assets/brands/amazon.png';
import casio from '../../../../assets/brands/casio.png';
import moonstar from '../../../../assets/brands/moonstar.png';
import randstad from '../../../../assets/brands/randstad.png';
import star from '../../../../assets/brands/star.png';
import starPeople from '../../../../assets/brands/start_people.png';
import Marquee from 'react-fast-marquee';

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

  return (
    <Container>
      <h2 className="text-center text-4xl font-bold text-secondary mb-10">
        We've helped thousands of sales teams
      </h2>
      <Marquee pauseOnHover={true} pauseOnClick={true} gradient={true}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="grid grid-cols-2 h-24 justify-between items-center cursor-pointer"
          >
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </Marquee>
    </Container>
  );
};

export default TrustedBy;
