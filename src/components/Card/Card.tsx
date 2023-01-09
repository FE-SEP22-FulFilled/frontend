import { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../../styles/main.scss';
import { Link } from 'react-router-dom';
import heart from '../../icons/Vector (Stroke).svg';
import { Phone } from '../../types/Phone';
import { getPhoneById } from '../../api/fetchData';

interface Props {
  card: Phone;
}

export const Card: React.FC<Props> = ({ card }) => {
  const {
    id, name, fullPrice, price, screen, capacity, ram, image,
  } = card;
  const cartFromLocaleStorage = JSON.parse(
    localStorage.getItem('cart') || '[]',
  );

  const [cart, setCart] = useState(cartFromLocaleStorage);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const logItem = (idItem: string) => {
    // eslint-disable-next-line no-console
    getPhoneById(idItem).then((res) => console.log(res));
  };

  const handleAddToCart = () => {
    setIsAdded(true);

    setCart(() => {
      return [...cartFromLocaleStorage, card];
    });
  };

  return (
    <section className="card">
      <div className="card__img-container">
        {/* eslint-disable-next-line global-require, import/no-dynamic-require */}
        <img src={require(`../../${image}`)} alt={name} className="card__img" />
      </div>

      <Link
        to={`/phones/${id}`}
        className="card__name"
        onClick={() => logItem(id)}
      >
        {`${name} (iMT9G2FS/A)`}
      </Link>

      <div className="card__price">
        <p className="card__price--new">{`$${price}`}</p>
        <p className="card__price--old">{`$${fullPrice}`}</p>
      </div>

      <div className="card__separator" />

      <div className="card__params">
        <div className="card__params--container">
          <p className="card__params--text">Screen</p>
          <p className="card__params--num">{screen}</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">Capacity</p>
          <p className="card__params--num">
            {`${capacity.slice(0, 2)} ${capacity.slice(2)}`}
          </p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--num">
            {`${ram.slice(0, 1)} ${ram.slice(1)}`}
          </p>
        </div>
      </div>

      <div className="card__buy">
        <button
          type="button"
          className={classNames('card__buy--add', {
            'card__buy--add-active': isAdded,
          })}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {' '}
          {isAdded ? 'Added' : 'Add to cart'}
          {' '}
        </button>

        <a href="/" className="card__buy--heart">
          <img src={heart} alt="heart_icon" className="card__icon" />
        </a>
      </div>
    </section>
  );
};
