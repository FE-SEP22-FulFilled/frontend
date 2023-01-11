import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from '../Swiper/Swiper';

import phonesImg from '../../img/home-page-category-phones.svg';
import tabletsImg from '../../img/home-page-category-tablets.svg';
import accessImg from '../../img/home-page-category-access.svg';

export const HomePage: React.FC = () => {
  return (
    <div className="home__page">
      <h1 className="home__page__header">Welcome to Nice Gadgets store!</h1>

      <div className="home__page__swiper">
        <Swiper />
      </div>

      <div className="home__page__brandnew">
        <h1>Brand new models</h1>

        {/* Brand new models goes here */}
      </div>

      <div className="home__page__category">
        <h1 className="home__page__category-title">Shop by category</h1>

        <div className="home__page__category__container">
          <div className="home__page__category__item">
            <Link to="phones">
              <img
                src={phonesImg}
                alt="phones"
                className="
              home__page__category__item-img
              home__page__category__item-img-phones
          "
              />
            </Link>

            <div className="home__page__category__item-text">
              <Link
                to="phones"
                className="home__page__category__item-text-white"
              >
                Mobile phones
              </Link>
              <span className="home__page__category__item-text-gray">
                95 models
              </span>
            </div>
          </div>

          <div className="home__page__category__item">
            <Link to="tablets">
              <img
                src={tabletsImg}
                alt="phones"
                className="
              home__page__category__item-img
              home__page__category__item-img-tablets
          "
              />
            </Link>

            <div className="home__page__category__item-text">
              <Link
                to="tablets"
                className="home__page__category__item-text-white"
              >
                Tablets
              </Link>
              <span className="home__page__category__item-text-gray">
                24 models
              </span>
            </div>
          </div>

          <div className="home__page__category__item">
            <Link to="accessories">
              <img
                src={accessImg}
                alt="phones"
                className="
              home__page__category__item-img
              home__page__category__item-img-access
          "
              />
            </Link>

            <div className="home__page__category__item-text">
              <Link
                to="accessories"
                className="home__page__category__item-text-white"
              >
                Accessories
              </Link>
              <span className="home__page__category__item-text-gray">
                100 models
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="home__page__hotprices">
        <h1>Hot prices</h1>

        {/* Hot prices goes here */}
      </div>
    </div>
  );
};
