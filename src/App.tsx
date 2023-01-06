import React from 'react';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage';
import { AccessoriesPage } from './components/AccessoriesPage';
import { CartPage } from './components/CartPage';
import { HomePage } from './components/HomePage';
import { PhonesPage } from './components/PhonesPage';
import { TabletsPage } from './components/TabletsPage';
import { Header } from './components/Header/Header';
import { FavouritesPage } from './components/FavouritesPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
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

          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
