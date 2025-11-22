import React from 'react';
import Container from '../../../../components/common/Container/Container';
import banner1 from '../../../../assets/banner/banner1.png';
import banner2 from '../../../../assets/banner/banner2.png';
import banner3 from '../../../../assets/banner/banner3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Keyboard, Pagination } from 'swiper/modules';
import { Link } from 'react-router';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Hero = () => {
  const banners = [banner1, banner2, banner3];

  return (
    <Container className="bg-base-100 rounded-xl px-20 py-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect="fade"
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, EffectFade, Keyboard, Autoplay]}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-16 left-24 flex justify-between items-center gap-2.5">
                <Link
                  to=""
                  className="px-5 py-2 text-[#1F1F1F] bg-primary rounded-md font-medium flex justify-between items-center gap-2.5"
                >
                  Track Your Parcel{' '}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </Link>
                <Link
                  to=""
                  className="px-5 py-2 text-[#606060] border border-[#DADADA] rounded-md font-medium"
                >
                  Be a Rider
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Hero;
