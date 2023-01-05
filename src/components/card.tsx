import '../styles/main.scss';
import img from '../img/phones/apple-iphone-11-pro-max/silver/00.jpg';
import heart from '../icons/Vector (Stroke).svg';

export const Card: React.FC = () => {
  return (
    <section className="card">
      <img src={img} alt="iPhone Xs" className="card__img" />

      <h2 className="card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>

      <div className="card__price">
        <p className="card__price--new">$799</p>
        <p className="card__price--old">$899</p>
      </div>

      <div className="card__separator" />

      <div className="card__params">
        <div className="card__params--container">
          <p className="card__params--text">Screen</p>
          <p className="card__params--num">5.8” OLED</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">Capacity</p>
          <p className="card__params--num">64 GB</p>
        </div>
        <div className="card__params--container">
          <p className="card__params--text">RAM</p>
          <p className="card__params--num">4 GB</p>
        </div>
      </div>

      <div className="card__buy">
        <div className="card__buy--add">
          <a href="/" className="card__buy--add-link">
            {' '}
            Add to cart
            {' '}
          </a>
        </div>

        <div className="card__buy--heart">
          <a href="/" className="card__buy--heart-icon">
            <img src={heart} alt="heart_icon" className="card__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
