/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Nav } from '../Nav/Nav';

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <Nav />

        <div className="icon">
          <NavLink to="favourites">
            <div className="icon__action icon__action--favorites">
              <img src={favoritesIcon} alt="favorites" />
            </div>
          </NavLink>

          <NavLink to="cart">
            <div className="icon__action icon__action--shop-bag">
              <img src={shopBagIcon} alt="shopping bag" />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
