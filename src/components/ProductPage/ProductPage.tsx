import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getFullInfoById, getPhones } from '../../api/fetchData';
import { ProductInfo } from '../../types/ProductInfo';
import favoritesIcon from '../../img/firstIcon.svg';
import { NotFoundPage } from '../NotFoundPage';
import { PhoneColors } from '../../types/PhoneColors';
import arrowBack from '../../icons/arrow_back.svg';
import { Phone } from '../../types/Phone';
import { CartContext } from '../CartContext';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const {
    cartPhonesList,
    setCartPhonesList,
    cartQuantity,
    setCartQuantity,
    cartPrice,
    setCartPrice,
  } = useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [card, setCard] = useState<Phone | null>(null);

  const loadCard = async () => {
    try {
      const productCards = await getPhones();

      if (productCards) {
        const neededCard = productCards.find(
          productCard => productCard.phoneId === slug,
        );

        if (neededCard) {
          setCard(neededCard);
        }
      }
    } catch (err) {
      setCard(null);
    }
  };

  const loadProduct = async () => {
    try {
      const loadedProduct = await getFullInfoById(`${slug}`);

      if (loadedProduct) {
        setProduct(loadedProduct);
      }
    } catch (err) {
      setProduct(null);
    }
  };

  const changeColor = (color: string) => {
    if (slug) {
      const newSlug = slug.split('-').reverse();

      newSlug[0] = color;

      return newSlug.reverse().join('-');
    }

    return null;
  };

  const changeCapacity = (capacity: string) => {
    if (slug) {
      const newSlug = slug.split('-').reverse();

      newSlug[1] = capacity.toLocaleLowerCase();

      return newSlug.reverse().join('-');
    }

    return null;
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    if (card) {
      setCartPhonesList([...cartPhonesList, card]);
      setCartQuantity(cartQuantity + 1);
      setCartPrice(cartPrice + card.price);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [product]);

  useEffect(() => {
    loadCard();
  }, [product]);

  return (
    <>
      {
        product
          ? (
            <main className="product">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="product__back"
              >
                <img
                  src={arrowBack}
                  alt="arrow_back"
                  className="product__back__arrow"
                />
                Back
              </button>

              <h1 className="product__title">{`${product.name} (iMT9G2FS/A)`}</h1>

              <div className="product--container">
                <article className="product__photos">
                  <img
                    // eslint-disable-next-line global-require, import/no-dynamic-require
                    src={require(`../../${product.images[0]}`)}
                    alt="phone__image"
                    className="product__photos__main--image"
                  />

                  <div className="product__photos__images">
                    {product.images.map(image => {
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

                    <div className="product__card__colors">
                      {product.colorsAvailable.map(color => {
                        const style = {
                          background: PhoneColors[color],
                        };

                        return (
                          <Link
                            to={`/phones/${changeColor(color)}`}
                            key={color}
                            className={
                              classNames(color !== product.color
                                ? 'product__card__color--button'
                                : 'product__card__color--button--is-active')
                            }
                            style={style}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div className="capacity--container">
                    <div className="text-container">
                      <p className="text-container--text">Select capacity</p>
                    </div>
                    <div className="product__card__capacity">
                      {product.capacityAvailable.map(capacity => {
                        return (
                          <Link
                            to={`/phones/${changeCapacity(capacity)}`}
                            key={capacity}
                            type="button"
                            className={
                              classNames(capacity !== product.capacity
                                ? 'product__card__capacity--button'
                                : 'product__card__capacity--button--is-active')
                            }
                          >
                            {`${capacity}`}
                          </Link>
                        );
                      })}
                    </div>
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
                    <button
                      type="button"
                      className={classNames('product__card__buy--button', {
                        'product__card__buy--button--is-active': isAdded,
                      })}
                      onClick={handleAddToCart}
                      disabled={isAdded}
                    >
                      {' '}
                      {isAdded ? 'Added' : 'Add to cart'}
                      {' '}
                    </button>

                    <button
                      type="button"
                      className="product__card__fav--button"
                    >
                      <img
                        src={favoritesIcon}
                        alt="favorites"
                      />
                    </button>
                  </div>

                  <div className="product__card__info">
                    <div className="text-container">
                      <p className="text-container--text">Screen</p>
                      <p className="text-container--num">{product.screen}</p>
                    </div>

                    <div className="text-container">
                      <p className="text-container--text">Resolution</p>
                      <p className="text-container--num">
                        {product.resolution}
                      </p>
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
                  <h2 className="product__tech--specs__header">
                    Tech specs
                  </h2>
                  <div className="product__tech--specs__info">
                    <div className="text-container">
                      <p className="text-container--text">Screen</p>
                      <p className="text-container--num">{product.screen}</p>
                    </div>

                    <div className="text-container">
                      <p className="text-container--text">Resolution</p>
                      <p className="text-container--num">
                        {product.resolution}
                      </p>
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
          )
          : (<NotFoundPage />)
      }
    </>
  );
};
