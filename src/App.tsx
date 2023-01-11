import React from 'react';
import './App.scss';

import {
  Link, Navigate, Route, Routes,
} from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { CartPage } from './components/CartPage';
import { FavouritesPage } from './components/FavouritesPage';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductPage } from './components/ProductPage/ProductPage';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Link to="product">ProductPage</Link>

        <Routes>
          <Route path="phones">
            <Route index element={<PhonesPage />} />
            {/* <Route path="id/slug" element={<PeoplePage />} /> */}
          </Route>

          <Route path="tablets">
            <Route index element={<TabletsPage />} />
            {/* <Route path="id/slug" element={<TabletsPage />} /> */}
          </Route>

          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
            {/* <Route path="id/slug" element={<AccessoriesPage />} /> */}
          </Route>

          <Route path="product" element={<ProductPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
