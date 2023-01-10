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

        <BurgerMenu />
      </header>
    </>
  );
};
