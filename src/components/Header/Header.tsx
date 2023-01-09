/* eslint-disable max-len */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';
import Logo from '../../img/Logo.svg';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import logoArm from '../../img/logoImage.svg';
import burgerIcon from '../../img/burgerIcon.svg';
import { BurgerMenu } from '../BurgerMenu';

export const Header: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  // function handleCloseBurger(): void {
  //   setIsActiveBurger(false);
  // }

  return (
    <>
      {isActiveBurger && (
        <BurgerMenu
          handleCloseBurger={setIsActiveBurger}
        />
      )}

      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <NavLink to="home">
              <img className="nav__logo__image" src={Logo} alt="logo" />
              <img className="nav__logo--arm" src={logoArm} alt="logo" />
            </NavLink>
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) => classNames('nav__link', { 'is-active': isActive })}
              >
                HOME
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="phones"
                className={({ isActive }) => classNames('nav__link', { 'is-active': isActive })}
              >
                PHONES
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="tablets"
                className={({ isActive }) => classNames('nav__link', { 'is-active': isActive })}
              >
                TABLETS
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="accessories"
                className={({ isActive }) => classNames('nav__link', { 'is-active': isActive })}
              >
                ACCESSORIES
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="icon">
          <div className="icon__action icon__action--favorites">
            <NavLink to="favourites">
              <img src={favoritesIcon} alt="favorites" />
            </NavLink>
          </div>

          <div className="icon__action icon__action--shop-bag">
            <NavLink to="cart">
              <img src={shopBagIcon} alt="shopping bag" />
            </NavLink>
          </div>
        </div>

        <button
          onClick={() => setIsActiveBurger(true)}
          type="button"
          className="icon__action icon__action--burger-menu"
        >
          <img src={burgerIcon} alt="shopping bag" />
        </button>
      </header>
    </>
  );
};
