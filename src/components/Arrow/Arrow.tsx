import classNames from 'classnames';
import React from 'react';

import arrowPrev from '../../icons/arrow_prev.svg';
import arrowNext from '../../icons/arrow_next.svg';

interface Props {
  destination: string;
  isNeedToDisable: boolean;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Arrow: React.FC<Props> = ({
  destination,
  isNeedToDisable,
  onPageChange,
  currentPage,
}) => {
  const isDirection = destination === 'prev';

  return (
    <li
      className={classNames('pagination__item', {
        'pagination__item--disabled': isNeedToDisable,
      })}
    >
      <a
        className={classNames('pagination__link', {
          'pagination__item--disabled': isNeedToDisable,
        })}
        href={`#${destination}`}
        aria-disabled={isNeedToDisable}
        onClick={() => !isNeedToDisable
          && onPageChange(
            destination === 'prev' ? currentPage - 1 : currentPage + 1,
          )}
      >
        <img src={isDirection ? arrowPrev : arrowNext} alt={destination} />
      </a>
    </li>
  );
};
