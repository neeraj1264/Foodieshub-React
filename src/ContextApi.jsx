import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const [quantity, setQuantity] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  const CartIcon = (addedQuantity) => {
    if (addedQuantity >= 0) {
      setCartItemsCount((prevCount) => prevCount + addedQuantity);
    }
  };

  const AddToCart = (product) => {
    const updatedProduct = { ...product, quantity: quantity };
    setCartItems((prevItems) => [...prevItems, updatedProduct]);
    setShowButtons(true);
    CartIcon(quantity); // Pass quantity to CartIcon
  };

  const decrementCart = () => {
    if (cartItemsCount > 0) {
      setCartItemsCount((prevCount) => prevCount - 1);
    }
  };

 
  const updateQuantity = (productId, newQuantity) => {
    setQuantity(newQuantity);
    updateCartItemQuantity(productId, newQuantity); // Update the quantity for the specific product
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

    const value = {
    cartItemsCount,
    cartItems,
    quantity,
    CartIcon,
    AddToCart,
    decrementCart,
    updateQuantity,
    updateCartItemQuantity,
  };
  

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
