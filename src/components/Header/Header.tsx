import React from 'react';
import './Header.scss';
import Logo from '../../img/Logo.svg';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/secondIcon.svg';
import logoArm from '../../img/logoImage.svg';
import burgerIcon from '../../img/burgerIcon.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <a href="#home">
            <img
              className="nav__logo__image"
              src={Logo}
              alt="logo"
            />
            <img
              className="nav__logo--arm"
              src={logoArm}
              alt="logo"
            />
          </a>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link is-active" href="#apple">HOME</a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#phones">PHONES</a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#tablets">TABLETS</a>
          </li>

          <li className="nav__item">
            <a
              className="nav__link"
              href="#accessories"
            >
              ACCESSORIES
            </a>
          </li>
        </ul>
      </nav>

      <div className="icon">
        <div className="icon__action icon__action--favorites">
          <a
            href="#favorites"
          >
            <img src={favoritesIcon} alt="favorites" />
          </a>
        </div>

        <div className="icon__action icon__action--shop-bag">
          <a
            href="#shopBag"
          >
            <img src={shopBagIcon} alt="shopping bag" />
          </a>
        </div>

        <div className="icon__action icon__action--burger-menu">
          <a
            href="#shopBag"
          >
            <img src={burgerIcon} alt="shopping bag" />
          </a>
        </div>
      </div>
    </header>
  );
};
