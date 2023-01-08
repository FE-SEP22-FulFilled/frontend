import React from 'react';
import { Link } from 'react-router-dom';

import homeImg from '../../icons/go_home.svg';
import arrow from '../../icons/breadcrumbs_arrow.svg';

interface Props {
  location: string;
}

export const Breadcrumbs: React.FC<Props> = React.memo(({ location }) => {
  const path = window.location.hash;

  const handleDisableClick = (event: React.MouseEvent, linkPath: string) => {
    if (path === `#/${linkPath}`) {
      event?.preventDefault();
    }
  };

  return (
    <div className="breadcrumbs">
      <Link to="/home" className="breadcrumbs__home">
        <img src={homeImg} alt="Go Home" />
      </Link>

      <img src={arrow} alt="arrow" className="breadcrumbs__arrow" />

      <Link
        to={`/${location}`}
        className="breadcrumbs__nav"
        onClick={(event) => handleDisableClick(event, location)}
      >
        <p>{`${location[0].toUpperCase()}${location.slice(1)}`}</p>
      </Link>
    </div>
  );
});
