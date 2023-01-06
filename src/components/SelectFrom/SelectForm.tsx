import classNames from 'classnames';
import React, { useState } from 'react';

interface Props {
  text: string;
  perPage: string;
  setPerPage: (page: string) => void;
  itemsPerPageOptions: string[];
}

export const SelectForm: React.FC<Props> = ({
  text,
  perPage,
  setPerPage,
  itemsPerPageOptions,
}) => {
  const [openList, setOpenList] = useState(false);

  return (
    <div className="selection__items">
      <p className="selection__text">{text}</p>

      <div>
        <div>
          <button
            type="button"
            className={classNames('selection__button', {
              'selection__button--open': openList,
            })}
            onClick={() => setOpenList(!openList)}
          >
            {perPage}
          </button>
        </div>

        {openList && (
          <div className="selection__list">
            {itemsPerPageOptions.map((option) => (
              <button
                type="button"
                key={option}
                className="selection__item"
                onClick={() => setPerPage(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
