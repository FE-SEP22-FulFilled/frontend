/* eslint-disable max-len */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import favoritesIcon from '../../img/firstIcon.svg';
import shopBagIcon from '../../img/shopping_bag.svg';
import { BurgerMenu } from '../BurgerMenu';
import { Nav } from '../Nav/Nav';
import { CartContext } from '../CartContext';

export const Header: React.FC = () => {
  const { cartQuantity, favPhonesList } = useContext(CartContext);

  return (
    <>
      <header className="header">
        <Nav />

        <div className="icon">
          <NavLink to="favourites">
            <div className="icon__action icon__action--favorites">
              {favPhonesList.length > 0 && (
                <div className="icon__quantity--favorites">
                  {favPhonesList.length}
                </div>
              )}

              <img src={favoritesIcon} alt="favorites" />
            </div>
          </NavLink>

          <NavLink to="cart">
            <div className="icon__action icon__action--shop-bag">
              {cartQuantity > 0 && (
                <div className="icon__quantity">{cartQuantity}</div>
              )}

              <img src={shopBagIcon} alt="shopping bag" />
            </div>
          </NavLink>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};
