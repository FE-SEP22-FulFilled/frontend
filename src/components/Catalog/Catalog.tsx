import React, { useCallback, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

import { Card } from '../Card';
import { Pagination } from '../Pagination/Pagination';
import { SelectForm } from '../SelectFrom/SelectForm';
import { getPhones } from '../../api/fetchData';
import { Phone } from '../../types/Phone';

const perPageOptions = ['8', '24', '40', '64'];
const sortByOptions = [
  'Newest',
  'Oldest',
  'Low-priced',
  'High-priced',
  'Popular',
];

interface Props {
  productName: string,
}

export const Catalog: React.FC<Props> = ({ productName }) => {
  const [cards, setCards] = useState<Phone[]>([]);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy] = useState(sortByOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    switch (productName) {
      case 'Mobile Phones':
        getPhones().then((res) => setCards(res.results));
        setTotal(cards.length);
        break;

      default:
        redirect('/home');
    }
  }, [cards]);

  useEffect(() => {
    setCurrentPage(1);
    redirect(`/products?page=1&limit=${perPage}`);
  }, [currentPage > Math.ceil(total / Number(perPage))]);

  const itemsOnPage = useCallback((currPage: number, itemsPerPage: string) => {
    const itemStart = Number(itemsPerPage) * (currPage - 1);
    const itemEnd = itemStart + Number(itemsPerPage) + 1;

    return cards.filter((item, i) => i > itemStart && i < itemEnd);
  }, [cards]);

  const visibleItems = itemsOnPage(currentPage, perPage);

  return (
    <div className="catalog">
      <div className="catalog__text">
        <h1 className="catalog__text--header">
          {productName}
        </h1>

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
          <Card
            key={card.id}
            card={card}

          />
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
  );
};
