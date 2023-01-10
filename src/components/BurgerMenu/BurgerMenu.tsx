/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */

import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import Logo from '../../img/Logo.svg';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import logoArm from '../../img/logoImage.svg';
import Close from '../../img/Close.svg';
import burgerIcon from '../../img/burgerIcon.svg';
import { NavigationLink } from '../NavLink/NavigationLink';

export const BurgerMenu: React.FC = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsActiveBurger(true)}
        type="button"
        className="burger-icon burger-icon--action"
      >
        <img src={burgerIcon} alt="shopping bag" />
      </button>

      {isActiveBurger && (
        <div className="burger">
          <nav className="burger__nav">
            <div className="burger__header">
              <div className="burger__logo">
                <NavLink to="home">
                  <img className="burger__logo--image" src={Logo} alt="logo" />

                  <img className="burger__logo--arm" src={logoArm} alt="logo" />
                </NavLink>
              </div>

              <button
                type="button"
                className="burger__button"
                onClick={() => setIsActiveBurger(false)}
              >
                <div>
                  <img src={Close} alt="cross" />
                </div>
              </button>
            </div>

            <div className="burger__list">
              <NavigationLink
                path="/"
                text="HOME"
                styleClass="burger__link"
                onShowMenu={setIsActiveBurger}
              />

              <NavigationLink
                path="phones"
                text="PHONES"
                styleClass="burger__link"
                onShowMenu={setIsActiveBurger}
              />

              <NavigationLink
                path="tablets"
                text="TABLETS"
                styleClass="burger__link"
                onShowMenu={setIsActiveBurger}
              />

              <NavigationLink
                path="accessories"
                text="ACCESSORIES"
                styleClass="burger__link"
                onShowMenu={setIsActiveBurger}
              />
            </div>

            <div className="burger__header burger__header--bottom">
              <div className="burger__header--icon">
                <div className="burger__header--icon--action">
                  <NavLink
                    className={({ isActive }) => classNames('burger__header--icon--action', {
                      'is-active': isActive,
                    })}
                    to="favourites"
                  >
                    <img src={favoritesIcon} alt="favorites" />
                  </NavLink>
                </div>
              </div>

              <div className="burger__header--icon">
                <div className="burger__header--icon--action">
                  <NavLink
                    className={({ isActive }) => classNames('burger__header--icon--action', {
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
        </div>
      )}
    </>
  );
};
