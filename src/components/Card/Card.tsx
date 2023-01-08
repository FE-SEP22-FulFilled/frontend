import '../../styles/main.scss';
import img from '../../img/phones/apple-iphone-11-pro-max/silver/00.jpg';
import heart from '../../icons/Vector (Stroke).svg';
import { Phone } from '../../types/Phone';

interface Props {
  card: Phone,
}

export const Card: React.FC<Props> = ({
  card,
}) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    // image,
  } = card;

  return (
    <section className="card">
      <img
        src={img}
        alt={name}
        className="card__img"
      />

      <a href="/" className="card__name">
        {`${name} (iMT9G2FS/A)`}
      </a>

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
          <p className="card__params--num">{`${capacity.slice(0, 2)} ${capacity.slice(2)}`}</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--num">{`${ram.slice(0, 1)} ${ram.slice(1)}`}</p>
        </div>
      </div>

      <div className="card__buy">
        <a href="/" className="card__buy--add">
          {' '}
          Add to cart
          {' '}
        </a>

        <a href="/" className="card__buy--heart">
          <img src={heart} alt="heart_icon" className="card__icon" />
        </a>
      </div>
    </section>
  );
};
