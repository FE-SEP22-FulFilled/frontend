import React from 'react';
import { Catalog } from '../Catalog/Catalog';

export const AccessoriesPage: React.FC = () => {
  return (
    <div className="main">
      <h1 className="catalog__amount-items-header">Accessories Page</h1>
      <Catalog />
    </div>
  );
};
