import React from 'react';
import { NavLink } from 'react-router-dom';
import logoArm from '../../img/logoImage.svg';
import Logo from '../../img/Logo.svg';
import { NavigationLink } from '../NavLink/NavigationLink';

export const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <NavLink to="home">
          <img className="nav__logo__image" src={Logo} alt="logo" />
          <img className="nav__logo--arm" src={logoArm} alt="logo" />
        </NavLink>
      </div>

      <ul className="nav__list">
        <li className="nav__item">
          <NavigationLink path="/" text="HOME" styleClass="nav__link" />
        </li>

        <li className="nav__item">
          <NavigationLink path="phones" text="PHONES" styleClass="nav__link" />
        </li>

        <li className="nav__item">
          <NavigationLink
            path="tablets"
            text="TABLETS"
            styleClass="nav__link"
          />
        </li>

        <li className="nav__item">
          <NavigationLink
            path="accessories"
            text="ACCESSORIES"
            styleClass="nav__link"
          />
        </li>
      </ul>
    </nav>
  );
};
