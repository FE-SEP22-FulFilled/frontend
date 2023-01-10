import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  perPage: string;
  setPerPage: (page: string) => void;
  perPageOptions: string[];
  total: number;
  currentPage: number;
}

export const SelectForm: React.FC<Props> = ({
  text,
  perPage,
  setPerPage,
  perPageOptions,
  total,
  currentPage,
}) => {
  const [openList, setOpenList] = useState(false);
  const [isAllOnShow, setIsAllOnShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement
      && openList
      && ref.current
      && !ref.current.contains(e.target)
    ) {
      setOpenList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openList]);

  const handleOnShowClick = () => {
    setIsAllOnShow(true);
    setPerPage(total.toString());
  };

  const handlePerPageClick = (choosedOption: string) => {
    setIsAllOnShow(false);
    setPerPage(choosedOption);
    setOpenList(false);
  };

  return (
    <div className="selection__items" ref={ref}>
      <p className="selection__text">{text}</p>

      <div>
        <button
          type="button"
          className={classNames('selection__button', {
            'selection__button--open': openList,
          })}
          onClick={() => {
            setOpenList(!openList);
          }}
        >
          {isAllOnShow ? 'Show All' : perPage}
        </button>

        {openList && (
          <div className="selection__list">
            {perPageOptions.map((option) => (
              <Link
                to={`?page=${currentPage}&limit=${option}`}
                key={option}
                className="selection__item"
                onClick={() => handlePerPageClick(option)}
              >
                {option}
              </Link>
            ))}

            <Link
              to={`?page=${1}&limit=${total}`}
              className="selection__item"
              onClick={handleOnShowClick}
            >
              Show All
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
