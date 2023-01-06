import React from 'react';
import { Catalog } from '../Catalog/Catalog';

export const PhonesPage: React.FC = () => {
  return (
    <div className="main">
      <h1 className="catalog__amount-items-header">Phones Page</h1>
      <Catalog />
    </div>
  );
};
