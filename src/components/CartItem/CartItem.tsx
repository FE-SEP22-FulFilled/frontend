import { useState } from 'react';

import '../../styles/main.scss';
import img from '../../img/phones/apple-iphone-11-pro-max/silver/00.jpg';
import cross from '../../icons/cross.svg';
import minus from '../../icons/minus.svg';
import plus from '../../icons/plus.svg';

export const CartItem: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className="cartItem">
      <div className="cartItem__title">
        <button
          type="button"
          className="cartItem__button cart__item--button--close"
        >
          <img src={cross} alt="x" />
        </button>

        <img src={img} alt="product_small" className="cartItem__img" />

        <a href="/" className="cartItem__title--text">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
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
          >
            <img src={minus} alt="-" />
          </button>

          <p className="cartItem__counter--number">{counter}</p>

          <button
            type="button"
            className="
              cartItem__counter--button
              cartItem__counter--button--plus"
            onClick={() => setCounter(counter + 1)}
          >
            <img src={plus} alt="+" />
          </button>
        </div>

        <p className="cartItem__price">$1099</p>
      </div>
    </section>
  );
};
