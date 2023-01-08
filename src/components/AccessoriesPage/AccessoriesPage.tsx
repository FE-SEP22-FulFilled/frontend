import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Catalog } from '../Catalog/Catalog';

export const AccessoriesPage: React.FC = () => {
  return (
    <main className="container-catalog">
      <Breadcrumbs location="accessories" />
      <Catalog productName="Accessories" />
    </main>
  );
};
