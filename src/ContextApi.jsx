import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = () => {
    if (cartItemsCount >= 0) {
      setCartItemsCount((prevCount) => prevCount + 1);
    }
  };

  const AddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const decrementCart = () => {
    if (cartItemsCount > 0) {
      setCartItemsCount((prevCount) => prevCount - 1);
    }
  };

  const value = {
    cartItemsCount,
    cartItems,
    addToCart,
    AddToCart,
    decrementCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
