import classNames from 'classnames';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  perPage: string;
  setOption: (option: string) => void;
  options: string[];
  total: number;
  currentPage: number;
  sortBy?: string;
}

export const SelectForm: React.FC<Props> = ({
  text,
  perPage,
  setOption,
  options,
  total,
  currentPage,
  sortBy,
}) => {
  const [openList, setOpenList] = useState(false);
  const [isAllOnShow, setIsAllOnShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isChangePage = text === 'Items on page';

  const checkIfClickedOutside = useCallback(
    (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement
        && openList
        && ref.current
        && !ref.current.contains(e.target)
      ) {
        setOpenList(false);
      }
    },
    [openList],
  );

  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openList]);

  const handleShowAllClick = () => {
    setIsAllOnShow(true);
    setOpenList(false);

    if (total) {
      setOption(total.toString());
    }
  };

  const handleOptionClick = (choosedOption: string) => {
    if (isChangePage) {
      setIsAllOnShow(false);
    }

    setOption(choosedOption);
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
          {isChangePage ? <>{isAllOnShow ? 'Show All' : perPage}</> : sortBy}
        </button>

        <ul
          className={classNames('selection__list', {
            'selection__list--active': openList,
          })}
        >
          {options.map((option) => (
            <li>
              <Link
                to={
                  isChangePage
                    ? `?page=${currentPage}&limit=${option}`
                    : `?page=${currentPage}&limit=${perPage}&sortBy=${option[0].toLowerCase()}${option.slice(
                      1,
                    )}`
                }
                key={option}
                className={classNames('selection__item', {
                  'selection__item--active': openList,
                })}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </Link>
            </li>
          ))}

          {isChangePage && (
            <li>
              <Link
                to={`?page=${1}&limit=${total}`}
                className={classNames('selection__item', {
                  'selection__item--active': openList,
                })}
                onClick={handleShowAllClick}
              >
                Show All
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
