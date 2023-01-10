import React, { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';

interface ContextValues {
  cartPhonesList: Phone[];
  setCartPhonesList: React.Dispatch<React.SetStateAction<Phone[]>>;
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartPrice: number;
  setCartPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = React.createContext<ContextValues>({
  cartPhonesList: [],
  setCartPhonesList: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
  cartPrice: 0,
  setCartPrice: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const cartFromLocaleStorage = JSON.parse(
    localStorage.getItem('cart') || '[]',
  );

  const quantity = JSON.parse(localStorage.getItem('quantity') || '0');

  const price = JSON.parse(localStorage.getItem('price') || '0');

  const [cartQuantity, setCartQuantity] = useState(quantity);
  const [cartPrice, setCartPrice] = useState(price);
  const [cartPhonesList, setCartPhonesList] = useState(cartFromLocaleStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartPhonesList));
  }, [cartPhonesList]);

  useEffect(() => {
    localStorage.setItem('quantity', JSON.stringify(cartQuantity));
  }, [cartQuantity]);

  useEffect(() => {
    localStorage.setItem('price', JSON.stringify(cartPrice));
  }, [cartPrice]);

  const contextValue = {
    cartPhonesList,
    setCartPhonesList,
    cartQuantity,
    setCartQuantity,
    cartPrice,
    setCartPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
