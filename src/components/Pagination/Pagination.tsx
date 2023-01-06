import classNames from 'classnames';
import React from 'react';

import { Arrow } from '../Arrow/Arrow';

interface Props {
  total: number;
  perPage: string;
  currentPage: number;
  onPageChange: (page: number) => void;
  getNumbers: (from: number, to: number) => number[];
}

export const Pagination: React.FC<Props> = React.memo(
  ({
    total, perPage, currentPage, onPageChange, getNumbers,
  }) => {
    let amountOfPages;

    if (perPage === 'Show all') {
      amountOfPages = 1;
    } else {
      amountOfPages = Math.ceil(total / Number(perPage));
    }

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

        {visiblePages.map((page) => {
          const isCurrentPage = currentPage === page;

          return (
            <li
              className={classNames('pagination__item', {
                'pagination__item--active': isCurrentPage,
              })}
              key={page}
            >
              <a
                className={classNames('pagination__link')}
                href={`#${page}`}
                onClick={() => !isCurrentPage && onPageChange(page)}
              >
                {page}
              </a>
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
