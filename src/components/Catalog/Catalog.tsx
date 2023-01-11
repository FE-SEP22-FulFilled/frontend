import React, { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

import { Card } from '../Card';
import { Pagination } from '../Pagination/Pagination';
import { SelectForm } from '../SelectFrom/SelectForm';
import { getPhones, getPhonesByQuery } from '../../api/fetchData';
import { perPageOptions, sortByOptions } from '../../utils/utilsCatalog';
import { Phone } from '../../types/Phone';
import { Loader } from '../Loader/Loader';

interface Props {
  productName: string;
}

export const Catalog: React.FC<Props> = ({ productName }) => {
  const [cards, setCards] = useState<Phone[] | null>([]);
  const [visibleItems, setVisibleItems] = useState<Phone[] | null>([]);
  const [loader, setLoader] = useState(true);
  const [perPage, setPerPage] = useState(perPageOptions[0]);
  const [sortBy, setSortBy] = useState(sortByOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isDataOnServer, setIsDataOnServer] = useState(true);

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
    if (productName === 'Mobile Phones') {
      loadItems();
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
      setIsDataOnServer(false);
    }
  }, [cards]);

  const loadItemsByQuery = async () => {
    try {
      const normalizedSortBy = sortBy[0].toLowerCase() + sortBy.slice(1);
      const loadedItems = await getPhonesByQuery(
        currentPage,
        perPage,
        normalizedSortBy,
      );

      if (loadedItems) {
        setVisibleItems(loadedItems);
      }
    } catch (err) {
      setVisibleItems(null);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    loadItemsByQuery();
  }, [sortBy, perPage, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    redirect(`/products?page=1&limit=${perPage}`);
  }, [currentPage > Math.ceil(total / Number(perPage))]);

  return (
    <div className="catalog">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="catalog__text">
            <h1 className="catalog__text--header">{productName}</h1>
            {isDataOnServer && (
              <p className="catalog__text--amount">{`${total} models`}</p>
            )}
          </div>

          {isDataOnServer ? (
            <>
              <div className="selection">
                <SelectForm
                  text="Sort by"
                  perPage={sortBy}
                  setOption={setSortBy}
                  options={sortByOptions}
                />

                <SelectForm
                  text="Items on page"
                  perPage={perPage}
                  setOption={setPerPage}
                  options={perPageOptions}
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
                  onSetPage={setCurrentPage}
                />
              </div>
            </>
          ) : (
            <>
              <div className="catalog__no-products">
                <p className="catalog__text--amount">No products yet</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
