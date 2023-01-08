import React, { useCallback, useEffect, useState } from 'react';

import { Card } from '../Card';
import { Pagination } from '../Pagination/Pagination';
import { SelectForm } from '../SelectFrom/SelectForm';
import { getNumbers } from '../../utils/utilsCatalog';

const cards = Array(71).fill(1);
const perPageOptions = ['8', '24', '40', '64'];
const sortByOptions = [
  'Newest',
  'Oldest',
  'Low-priced',
  'High-priced',
  'Popular',
];

export const Catalog: React.FC = () => {
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy] = useState(sortByOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total] = useState(cards.length);

  const initialItems = getNumbers(1, total);

  const itemsOnPage = useCallback((currPage: number, itemsPerPage: string) => {
    const itemStart = Number(itemsPerPage) * (currPage - 1);
    const itemEnd = itemStart + Number(itemsPerPage) + 1;

    return initialItems.filter((i) => i > itemStart && i < itemEnd);
  }, []);

  const visibleItems = itemsOnPage(currentPage, perPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentPage > Math.ceil(total / Number(perPage))]);

  return (
    <main className="container-catalog">
      <div className="catalog">
        <div className="catalog__text">
          <h1 className="catalog__text--header">Mobile Phones</h1>

          <p className="catalog__text--amount">{`${total} models`}</p>
        </div>

        <div className="selection">
          <SelectForm
            text="Sort by"
            perPage={sortBy}
            setPerPage={setPerPage}
            perPageOptions={sortByOptions}
            total={total}
            currentPage={currentPage}
          />

          <SelectForm
            text="Items on page"
            perPage={perPage}
            setPerPage={setPerPage}
            perPageOptions={perPageOptions}
            total={total}
            currentPage={currentPage}
          />
        </div>

        <div className="cards-list">
          {visibleItems.map((card) => (
            <Card key={card} />
          ))}
        </div>

        <div>
          <Pagination
            total={total}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={useCallback(setCurrentPage, [currentPage, perPage])}
          />
        </div>
      </div>
    </main>
  );
};
