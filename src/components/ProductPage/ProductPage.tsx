import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFullInfoById } from '../../api/fetchData';
import { ProductInfo } from '../../types/ProductInfo';
import favoritesIcon from '../../img/firstIcon.svg';
import { NotFoundPage } from '../NotFoundPage';
import { PhoneColors } from '../../types/PhoneColors';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<ProductInfo | null>(null);

  const loadProduct = async () => {
    try {
      const loadedProduct = await getFullInfoById('13');

      if (loadedProduct) {
        setProduct(loadedProduct);
      }
    } catch (err) {
      setProduct(null);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [product]);

  return (
    <>
      {product ? (
        <main className="product">
          <Link to="../phones" className="product__link">
            Back
          </Link>

          <h1>{`${product.name} (iMT9G2FS/A)`}</h1>

          <div className="product--container">
            <article className="product__photos">
              <img
                // eslint-disable-next-line global-require, import/no-dynamic-require
                src={require(`../../${product.images[0]}`)}
                alt="phone__image"
                className="product__photos__main--image"
              />

              <div className="product__photos__images">
                {product.images.map((image) => {
                  const imageId = image.split('/').reverse()[0];

                  return (
                    <img
                      key={imageId}
                      // eslint-disable-next-line global-require, import/no-dynamic-require
                      src={require(`../../${image}`)}
                      alt="phone__image"
                      className="product__photos__image"
                    />
                  );
                })}
              </div>
            </article>

            <article className="product__card">
              <div className="colors--container">
                <div className="text-container">
                  <p className="text-container--text">Available colors</p>
                  <p className="text-container--id">ID: 802390</p>
                </div>

                {product.colorsAvailable.map((color) => {
                  const style = {
                    background: PhoneColors[color],
                  };

                  return (
                    // eslint-disable-next-line jsx-a11y/control-has-associated-label
                    <button
                      key={color}
                      type="button"
                      style={style}
                      className="product__card__color--button"
                    />
                  );
                })}
              </div>

              <div className="capacity--container">
                <div className="text-container">
                  <p className="text-container--text">Select capacity</p>
                </div>

                {product.capacityAvailable.map((capacity) => {
                  return (
                    <button
                      key={capacity}
                      type="button"
                      className="product__card__capacity--button"
                    >
                      {`${capacity}`}
                    </button>
                  );
                })}
              </div>

              <div className="product__card__price">
                <p className="product__card__price--discount">
                  {product.priceDiscount}
                </p>
                <p className="product__card__price--regular">
                  {product.priceRegular}
                </p>
              </div>

              <div className="button--container">
                <button type="button" className="product__card__buy--button">
                  Add to cart
                </button>

                <button type="button" className="product__card__fav--button">
                  <img src={favoritesIcon} alt="favorites" />
                </button>
              </div>

              <div className="product__card__info">
                <div className="text-container">
                  <p className="text-container--text">Screen</p>
                  <p className="text-container--num">{product.screen}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Resolution</p>
                  <p className="text-container--num">{product.resolution}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Processor</p>
                  <p className="text-container--num">{product.processor}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">RAM</p>
                  <p className="text-container--num">{product.ram}</p>
                </div>
              </div>
            </article>
          </div>

          <div className="about--container">
            <article className="product__about">
              <h2 className="product__about__header">About</h2>
              <h3 className="product__about__title">
                {product.description[0].title}
              </h3>
              <p className="product__about__text">
                {product.description[0].text[0]}
              </p>
              <p className="product__about__text">
                {product.description[0].text[1]}
              </p>

              <h3 className="product__about__title">
                {product.description[1].title}
              </h3>
              <p className="product__about__text">
                {product.description[1].text[0]}
              </p>

              <h3 className="product__about__title">
                {product.description[2].title}
              </h3>
              <p className="product__about__text">
                {product.description[2].text[0]}
              </p>
            </article>

            <article className="product__tech--specs">
              <h2 className="product__tech--specs__header">Tech specs</h2>
              <div className="product__tech--specs__info">
                <div className="text-container">
                  <p className="text-container--text">Screen</p>
                  <p className="text-container--num">{product.screen}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Resolution</p>
                  <p className="text-container--num">{product.resolution}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Processor</p>
                  <p className="text-container--num">{product.processor}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">RAM</p>
                  <p className="text-container--num">{product.ram}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Built in memory</p>
                  <p className="text-container--num">{product.capacity}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Camera</p>
                  <p className="text-container--num">{product.camera}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Zoom</p>
                  <p className="text-container--num">{product.zoom}</p>
                </div>

                <div className="text-container">
                  <p className="text-container--text">Cell</p>
                  <p className="text-container--num">
                    {product.cell.join(', ')}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </main>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
