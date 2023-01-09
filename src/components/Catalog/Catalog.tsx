import React, { useCallback, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

import { Card } from '../Card';
import { Pagination } from '../Pagination/Pagination';
import { SelectForm } from '../SelectFrom/SelectForm';
import { getPhones } from '../../api/fetchData';
import { perPageOptions, sortByOptions } from '../../utils/utilsCatalog';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader/Loader';

interface Props {
  productName: string;
}

export const Catalog: React.FC<Props> = ({ productName }) => {
  const [cards, setCards] = useState<Phone[] | null>([]);
  const [loader, setLoader] = useState(true);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy] = useState(sortByOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const loadItems = async () => {
    try {
      const loadedItems = await getPhones();

      if (loadedItems) {
        setCards(loadedItems);
        setTotal(loadedItems.length);
      }
    } catch (err) {
      setCards(null);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, [cards]);

  useEffect(() => {
    setCurrentPage(1);
    redirect(`/products?page=1&limit=${perPage}`);
  }, [currentPage > Math.ceil(total / Number(perPage))]);

  const itemsOnPage = useCallback(
    (currPage: number, itemsPerPage: string) => {
      const itemStart = Number(itemsPerPage) * (currPage - 1);
      const itemEnd = itemStart + Number(itemsPerPage) + 1;

      return cards?.filter((item, i) => i > itemStart && i < itemEnd);
    },
    [cards],
  );

  const visibleItems = itemsOnPage(currentPage, perPage);

  return (
    <div className="catalog">

      {loader
        ? <Loader />
        : (
          <>
            <div className="catalog__text">
              <h1 className="catalog__text--header">{productName}</h1>
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
              {visibleItems?.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>

            <div className="catalog__pagination">
              <Pagination
                total={total}
                perPage={perPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
    </div>
  );
};
