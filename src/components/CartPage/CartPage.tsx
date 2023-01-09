/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../../styles/blocks/cart-page.scss';
import { Link } from 'react-router-dom';
import BackImg from '../../icons/cart_back_button.svg';
import { CartItem } from '../CartItem';

export const CartPage: React.FC = () => {
  return (
    <div className="cart__page">
      <Link to="/" className="cart__page__back-content">
        <img src={BackImg} alt="backImg" className="cart__page__link" />
        <span>Back</span>
      </Link>

      <h1 className="cart__page__header">Cart</h1>

      <div className="
        cart__page--content
        grid
        grid-tablet
        grid-mobile"
      >
        <div className="
          cart__page--content--items
          grid__item--desktop-1-17
          grid__item--tablet-1-13
          grid__item--mobile-1-5"
        >
          <div className="cart__page--content--items-item">
            <CartItem />
          </div>

          <div className="cart__page--content--items-item">
            <CartItem />
          </div>

          <div className="cart__page--content--items-item">
            <CartItem />
          </div>
        </div>

        <div className="
          cart__page__checkout
          grid__item--desktop-17-25
          grid__item--tablet-1-13
          grid__item--mobile-1-5"
        >
          <span className="cart__page__checkout-price">$2657</span>
          <span className="cart__page__checkout-total">Total for 3 items</span>
          <div className="cart__page__checkout-pipe" />
          <button type="button" className="cart__page__checkout-button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
