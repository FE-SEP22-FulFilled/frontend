/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import classNames from 'classnames';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cross from '../../icons/cross.svg';
import minus from '../../icons/minus.svg';
import plus from '../../icons/plus.svg';
import { Phone } from '../../types/Phone';
import { CartContext } from '../CartContext';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    cartPhonesList,
    setCartPhonesList,
    cartQuantity,
    setCartQuantity,
    cartPrice,
    setCartPrice,
  } = useContext(CartContext);

  const changePhoneQuantity = (changingPhone: Phone, newQuantity = 1) => {
    const newCartPhonesList = cartPhonesList.map((item) => {
      if (item.id === changingPhone.id) {
        const newPhone = {
          ...changingPhone,
          quantity: newQuantity,
        };

        return newPhone;
      }

      const oldPhone = {
        ...item,
        quantity: item.quantity || 1,
      };

      return oldPhone;
    });

    setCartPhonesList(newCartPhonesList);
  };

  const [counter, setCounter] = useState(phone.quantity || 1);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }

    changePhoneQuantity(phone, counter);
  }, [counter]);

  const handleCartItemDelete = (deleteId: string) => {
    setCartPhonesList(cartPhonesList.filter((item) => item.id !== deleteId));
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

        <Link to={`/phones/${phone.phoneId}`} className="cartItem__title--text">
          {`${phone.name}`}
        </Link>
      </div>

      <div className="cartItem__numbers">
        <div className="cartItem__counter">
          <button
            type="button"
            className={classNames('cartItem__counter--button', {
              'cartItem__counter--button--minus': isDisabled,
            })}
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
