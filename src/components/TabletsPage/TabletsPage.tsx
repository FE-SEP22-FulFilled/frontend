import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Catalog } from '../Catalog/Catalog';

export const TabletsPage: React.FC = () => {
  return (
    <main className="container-catalog">
      <Breadcrumbs location="tablets" />
      <Catalog productName="Tablets" />
    </main>
  );
};
