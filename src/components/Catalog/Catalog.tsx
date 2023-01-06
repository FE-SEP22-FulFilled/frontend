import React, { useCallback, useState } from 'react';

import { Card } from '../Card';
import { Pagination } from '../Pagination/Pagination';
import { SelectForm } from '../SelectFrom/SelectForm';

const cards = Array(71).fill(1);
const itemsPerPageOptions = ['16', '24', '40', '64', 'Show all'];
const sortByOptions = [
  'Newest',
  'Oldest',
  'Low-priced',
  'High-priced',
  'Popular',
];

function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const Catalog: React.FC = () => {
  const [perPage, setPerPage] = useState(itemsPerPageOptions[0]);
  const [sortBy] = useState(sortByOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total] = useState(cards.length);

  const initialItems = getNumbers(1, total);

  const itemsOnPage = useCallback((currPage: number, itemsPerPage: string) => {
    if (itemsPerPage === 'Show all') {
      return initialItems;
    }

    const itemStart = Number(itemsPerPage) * (currPage - 1);
    const itemEnd = itemStart + Number(itemsPerPage) + 1;

    return initialItems.filter((i) => i > itemStart && i < itemEnd);
  }, []);

  const visibleItems = itemsOnPage(currentPage, perPage);

  return (
    <main className="container-catalog">
      <div className="catalog">
        <h1 className="catalog__amount-items-header">Mobile Phones</h1>
        <p className="catalog__amount-items-text">{`${total} models`}</p>
        <div className="selection">
          <SelectForm
            text="Sort by"
            perPage={sortBy}
            setPerPage={setPerPage}
            itemsPerPageOptions={sortByOptions}
          />

          <SelectForm
            text="Items on page"
            perPage={perPage}
            setPerPage={setPerPage}
            itemsPerPageOptions={itemsPerPageOptions}
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
            getNumbers={getNumbers}
          />
        </div>
      </div>
    </main>
  );
};
