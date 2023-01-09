/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import Logo from '../../img/Logo.svg';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import logoArm from '../../img/logoImage.svg';
import Close from '../../img/Close.svg';

interface Props {
  handleCloseBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<Props> = ({ handleCloseBurger }) => {
  return (
    <nav className="burger">
      <div className="burger__container">
        <div className="burger__logo">
          <NavLink to="home">
            <img className="burger__logo--image" src={Logo} alt="logo" />
            <img className="burger__logo--arm" src={logoArm} alt="logo" />
          </NavLink>
        </div>
        <button type="button" className="burger__button" onClick={() => handleCloseBurger(false)}>
          <div>
            <img src={Close} alt="cross" />
          </div>
        </button>
      </div>

      <div className="burger__list">
        <NavLink
          to="/"
          className={({ isActive }) => classNames('burger__link', { 'is-active': isActive })}
        >
          HOME
        </NavLink>

        <NavLink
          to="phones"
          className={({ isActive }) => classNames('burger__link', { 'is-active': isActive })}
        >
          PHONES
        </NavLink>

        <NavLink
          to="tablets"
          className={({ isActive }) => classNames('burger__link', { 'is-active': isActive })}
        >
          TABLETS
        </NavLink>

        <NavLink
          to="accessories"
          className={({ isActive }) => classNames('burger__link', { 'is-active': isActive })}
        >
          ACCESSORIES
        </NavLink>
      </div>

      <div className="burger__container burger__container--bottom">
        <div className="icon">
          <div className="icon__action icon__action--favorites">
            <NavLink
              className={({ isActive }) => classNames('icon__action icon__action--shop-bag', {
                'is-active': isActive,
              })}
              to="favourites"
            >
              <img src={favoritesIcon} alt="favorites" />
            </NavLink>
          </div>
        </div>

        <div className="icon">
          <div className="icon__action icon__action--shop-bag">
            <NavLink
              className={({ isActive }) => classNames('icon__action icon__action--shop-bag', {
                'is-active': isActive,
              })}
              to="cart"
            >
              <img src={shopBagIcon} alt="shopping_bag" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
