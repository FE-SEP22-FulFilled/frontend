import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { getNumbers } from '../../utils/utilsCatalog';
import { Arrow } from '../Arrow/Arrow';

interface Props {
  total: number;
  perPage: string;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = React.memo(
  ({
    total, perPage, currentPage, onPageChange,
  }) => {
    const amountOfPages = Math.ceil(total / Number(perPage));
    const isFirstPage = currentPage - 1 === 0;
    const isLastPage = currentPage === amountOfPages;

    const visiblePages = getNumbers(1, amountOfPages);

    return (
      <ul className="pagination">
        <Arrow
          destination="prev"
          isNeedToDisable={isFirstPage}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />

        {visiblePages.map((page: number) => {
          const isCurrentPage = currentPage === page;

          return (
            <li
              className={classNames('pagination__item', {
                'pagination__item--active': isCurrentPage,
              })}
              key={page}
            >
              <Link
                className={classNames('pagination__link')}
                to={`?page=${page}`}
                onClick={() => !isCurrentPage && onPageChange(page)}
              >
                {page}
              </Link>
            </li>
          );
        })}

        <Arrow
          destination="next"
          isNeedToDisable={isLastPage}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </ul>
    );
  },
);
