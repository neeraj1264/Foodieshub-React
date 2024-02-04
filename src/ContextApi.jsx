import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    setCartItemsCount((prevCount) => prevCount + 1);
  };

  const value = {
    cartItemsCount,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
