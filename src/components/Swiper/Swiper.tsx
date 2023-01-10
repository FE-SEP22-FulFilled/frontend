/* eslint-disable no-console */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/utils/swiper.scss';

// import required modules
import { Pagination } from 'swiper';
import slider1 from '../../img/home-page-slider.svg';

export default () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider1} alt="slider img" />
        {/* <div className="swiper__img" /> */}
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider1} alt="slider img" />
        {/* <div className="swiper__img" /> */}
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider1} alt="slider img" />
        {/* <div className="swiper__img" /> */}
      </SwiperSlide>
    </Swiper>
  );
};
