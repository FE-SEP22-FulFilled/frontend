import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

type Props = {
  isHidden: boolean,
  onSetIsHidden: React.Dispatch<React.SetStateAction<boolean>>,
};

export const CartCheckout: React.FC<Props> = ({ isHidden, onSetIsHidden }) => {
  const {
    setCartPhonesList,
    setCartPrice,
    setCartQuantity,
  } = useContext(CartContext);

  const handleCheckoutClick = () => {
    onSetIsHidden(false);
    setCartPhonesList([]);
    setCartPrice(0);
    setCartQuantity(0);
  };

  return (
    <div className={classNames('cartCheckout', {
      'cartCheckout--hidden': !isHidden,
    })}
    >
      <div className="cartCheckout__container">
        <div className="cartCheckout__text">
          <p className="cartCheckout__text--title">
            Thank you for your order!
          </p>

          <p className="cartCheckout__text--recall">
            Our operator will contact you soon.
          </p>
        </div>
        <div className="cartCheckout__button">
          <Link
            to="/"
            onClick={handleCheckoutClick}
            className="cartCheckout__button--home"
          >
            <p className="cartCheckout__text">Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
