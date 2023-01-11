import React, { useContext } from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { Card } from '../Card';
import { CartContext } from '../CartContext';

export const FavouritesPage: React.FC = () => {
  const { favPhonesList } = useContext(CartContext);

  return (
    <div className="favPage">
      <Breadcrumbs location="favourites" />

      <h1 className="favPage__title">Favourites</h1>

      {favPhonesList.length > 0 ? (
        <p className="favPage__counter">{`${favPhonesList.length} items`}</p>
      ) : (
        <p className="favPage__counter">Nothing here yet</p>
      )}

      <div className="cards-list">
        {favPhonesList.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
