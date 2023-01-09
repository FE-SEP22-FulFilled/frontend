/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';

import '../../styles/main.scss';
import cross from '../../icons/cross.svg';
import minus from '../../icons/minus.svg';
import plus from '../../icons/plus.svg';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <section className="cartItem">
      <div className="cartItem__title">
        <button
          type="button"
          className="cartItem__button cart__item--button--close"
        >
          <img src={cross} alt="x" />
        </button>

        <img src={require(`../../${phone.image}`)} alt={phone.name} className="cartItem__img" />

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
            onClick={() => setCounter(counter - 1)}
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
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <img src={plus} alt="+" />
          </button>
        </div>

        <p className="cartItem__price">{`${phone.price * counter}$`}</p>
      </div>
    </section>
  );
};
