/* eslint-disable max-len */
import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  path: string;
  text: string;
  onShowMenu?: (isShow: boolean) => void;
  styleClass: string;
}

export const NavigationLink: React.FC<Props> = ({
  path,
  text,
  onShowMenu,
  styleClass,
}) => {
  return (
    <NavLink
      to={path}
      className={
        ({ isActive }) => classNames(styleClass, { 'is-active': isActive })
      }
      onClick={() => onShowMenu !== undefined && onShowMenu(false)}
    >
      {text}
    </NavLink>
  );
};
