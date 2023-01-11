import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import BackImg from '../../icons/cart_back_button.svg';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/Phone';
import { CartContext } from '../CartContext';
import { CartCheckout } from '../CartCheckout';

export const CartPage: React.FC = () => {
  const { cartPhonesList, cartQuantity, cartPrice } = useContext(CartContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (cartPrice < 1) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [cartPrice]);

  return (
    <div className="cart__page">
      <Link to="/" className="cart__page__back-content">
        <img src={BackImg} alt="backImg" className="cart__page__link" />
        <span>Back</span>
      </Link>

      <h1 className="cart__page__header">Cart</h1>

      <div className="grid grid--desktop grid--tablet">
        <div
          className="
            grid__item
            grid__item-d--1--15
            grid__item-t--1--12
          "
        >
          <div className="cart__page--text--amount">
            {cartPhonesList.length === 0 && 'No items yet'}

            {cartPhonesList && cartPhonesList.map((phone: Phone) => (
              <CartItem phone={phone} key={phone.id} />
            ))}
          </div>
        </div>

        <div
          className="
            cart__page__checkout
            grid__item
            grid__item-d--16--24
            grid__item-t--1--12
          "
        >
          <span className="cart__page__checkout-price">{`$${cartPrice}`}</span>
          <span className="cart__page__checkout-total">{`Total for ${cartQuantity} items`}</span>
          <div className="cart__page__checkout-pipe" />
          <button
            type="button"
            className={classNames('cart__page__checkout-button', {
              'cart__page__checkout-button-disabled': isDisabled,
            })}
            disabled={isDisabled}
            onClick={() => setIsHidden(false)}
          >
            Checkout
          </button>
        </div>

        <CartCheckout isHidden={isHidden} onSetIsHidden={setIsHidden} />
      </div>
    </div>
  );
};
