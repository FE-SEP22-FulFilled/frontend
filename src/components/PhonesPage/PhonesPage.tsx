import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Catalog } from '../Catalog/Catalog';

export const PhonesPage: React.FC = () => {
  return (
    <main className="container-catalog">
      <Breadcrumbs location="phones" />
      <Catalog productName="Mobile Phones" />
    </main>
  );
};
