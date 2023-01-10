// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/utils/swiper.scss';
import slide1 from '../../img/Banner.svg';

// import required modules

export default function App() {
  const slides = [slide1, slide1, slide1];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={Math.random()}>
            <img
              className="swiper__image"
              src={slide}
              alt={`slide ${slides.indexOf(slide)}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
