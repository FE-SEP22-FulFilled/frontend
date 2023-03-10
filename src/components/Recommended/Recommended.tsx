import React, { useEffect, useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Phone } from '../../types/Phone';
import { Card } from '../Card';
import '../../styles/blocks/Recommended.scss';
import { getRecommended } from '../../api/fetchData';

type Props = {
  title: string;
};

export const Recommended: React.FC<Props> = ({ title }) => {
  const [cards, setCards] = useState<Phone[]>([]);

  const getCards = async () => {
    const loadedCards = await getRecommended('1');

    if (loadedCards) {
      setCards(loadedCards);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  const swiperRef = useRef<any>(null);

  return (
    <>
      <div className="flex">
        <h1 className="recommended__title">{title}</h1>

        <div className="buttons__wrapper">
          <button
            type="button"
            className="recommended__button recommended__button--prev"
            aria-label="back"
            id="previousButton"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />

          <button
            type="button"
            className="recommended__button recommended__button--next"
            aria-label="forward"
            id="nextButton"
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </div>
      </div>
      <div className="recommended">
        <div className="recommended__items">
          <Swiper
            modules={[Pagination]}
            ref={swiperRef}
            spaceBetween={28}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              744: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide>
                <Card card={card} key={card.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
