/* eslint-disable max-len */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Nav } from '../Nav/Nav';
import { CartContext } from '../CartContext';

export const Header: React.FC = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      <header className="header">
        <Nav />

        <div className="icon">
          <NavLink to="favourites">
            <div className="icon__action icon__action--favorites">
              {/* here should be favorites quantity */}
              <div className="icon__quantity--favorites">0</div>

              <img src={favoritesIcon} alt="favorites" />
            </div>
          </NavLink>

          <NavLink to="cart">
            <div className="icon__action icon__action--shop-bag">
              <div className="icon__quantity">{cartQuantity}</div>

              <img src={shopBagIcon} alt="shopping bag" />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
