// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../styles/utils/swiper.scss';
import slide1 from '../../img/Banner(1).png';
import slide2 from '../../img/Banner2.jpg';
import slide3 from '../../img/Banner3.jpg';

export default function App() {
  const slides = [slide1, slide2, slide3];

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
        className="swiper__main"
      >
        {slides.map((slide) => (
          <SwiperSlide key={Math.random()}>
            <Link to="phones">
              <img
                className="swiper__image swiper__main--img"
                src={slide}
                alt={`slide ${slides.indexOf(slide)}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
