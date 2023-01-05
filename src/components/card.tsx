export const Card: React.FC = () => {
  return (
    <section className="card">
      <img
        src="../img/phones/apple-iphone-11-pro-max/silver/00.jpg"
        alt="iPhone Xs"
        className="card__img"
      />

      <h2 className="card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>

      <div className="card__price">
        <p className="card__price--new">$799</p>
        <p className="card__price--old">$899</p>
      </div>

      <div className="card__separator">-------</div>

      <div className="card__params">
        <p className="card__params--text">Screen</p>
        <p className="card__params--screen">5.8” OLED</p>
        <p className="card__params--text">Capacity</p>
        <p className="card__params--capacity">64 GB</p>
        <p className="card__params--text">RAM</p>
        <p className="card__params--ram">4 GB</p>
      </div>

      <div className="card__buy">
        <a href="/" className="card__buy--add">
          {' '}
          Add to cart
          {' '}
        </a>

        <a href="/" className="card__buy--like">
          <img
            src="../icons/Vector (Stroke).svg"
            alt="heart_icon"
            className="card__icon"
          />
        </a>
      </div>
    </section>
  );
};
