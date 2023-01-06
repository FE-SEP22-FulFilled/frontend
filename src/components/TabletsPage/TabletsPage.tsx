import React from 'react';
import { Catalog } from '../Catalog/Catalog';

export const TabletsPage: React.FC = () => {
  return (
    <div className="main">
      <h1 className="catalog__amount-items-header">Tablets Page</h1>
      <Catalog />
    </div>
  );
};
