import React, { use } from 'react';
import topCustomer from '../../../../assets/images/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './components/ReviewCard/ReviewCard';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="mb-30">
      <div className="flex flex-col justify-between items-center gap-7 mb-20">
        <img src={topCustomer} alt="Top Customer" className="mb-3" />
        <h2 className="text-center text-4xl font-bold text-secondary">
          What our customers are sayings
        </h2>
        <p className="text-center text-[#606060] w-1/3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={100}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            scale: 1,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
