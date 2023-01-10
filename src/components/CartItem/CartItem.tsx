/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useContext, useEffect, useState } from 'react';

import '../../styles/main.scss';
import cross from '../../icons/cross.svg';
import minus from '../../icons/minus.svg';
import plus from '../../icons/plus.svg';
import { Phone } from '../../types/Phone';
import { CartContext } from '../CartContext';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    cartPhonesList,
    setCartPhonesList,
    cartQuantity,
    setCartQuantity,
    cartPrice,
    setCartPrice,
  } = useContext(CartContext);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  const handleCartItemDelete = (deleteId: string) => {
    setCartPhonesList(
      cartPhonesList.filter(item => item.id !== deleteId),
    );
    setCartQuantity(cartQuantity - counter);
    setCartPrice(cartPrice - phone.price * counter);
  };

  const handleMinusItem = () => {
    setCounter(counter - 1);
    setCartQuantity(cartQuantity - 1);
    setCartPrice(cartPrice - phone.price);
  };

  const handlePlusItem = () => {
    setCounter(counter + 1);
    setCartQuantity(cartQuantity + 1);
    setCartPrice(cartPrice + phone.price);
  };

  return (
    <section className="cartItem">
      <div className="cartItem__title">
        <button
          type="button"
          className="cartItem__button cart__item--button--close"
          onClick={() => handleCartItemDelete(phone.id)}
        >
          <img src={cross} alt="x" />
        </button>

        <img
          src={require(`../../${phone.image}`)}
          alt={phone.name}
          className="cartItem__img"
        />

        <a href="/" className="cartItem__title--text">
          {`${phone.name}`}
        </a>
      </div>

      <div className="cartItem__numbers">
        <div className="cartItem__counter">
          <button
            type="button"
            className="
              cartItem__counter--button
              cartItem__counter--button--minus"
            onClick={handleMinusItem}
            disabled={isDisabled}
          >
            <img src={minus} alt="-" />
          </button>

          <p className="cartItem__counter--number">{counter}</p>

          <button
            type="button"
            className="
              cartItem__counter--button
              cartItem__counter--button--plus"
            onClick={handlePlusItem}
          >
            <img src={plus} alt="+" />
          </button>
        </div>

        <p className="cartItem__price">{`${phone.price * counter}$`}</p>
      </div>
    </section>
  );
};
