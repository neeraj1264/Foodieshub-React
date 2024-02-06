// Cards.js

import React, { useState } from 'react';
import { useCart } from '../../../ContextApi';
import QuantityButton from '../../QuantityButton';

const Cards = ({ name, description, price, image, mrp, productId }) => {
  const { decrementCart, CartIcon, AddToCart, quantity, updateQuantity } = useCart();
  const [showButtons, setShowButtons] = useState(false);

  const handleIncrement = () => {
    updateQuantity(productId, quantity + 1); // Pass productId to updateQuantity
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(productId, quantity - 1); // Pass productId to updateQuantity
    } else {
      setShowButtons(false);
      decrementCart();
    }
  };

  const handleAddToCart = () => {
    const product = {
      name,
      price,
      quantity,
      image,
      productId,
    };
    AddToCart(product);
    setShowButtons(true);
    CartIcon(quantity); // Pass quantity to CartIcon
  };

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: '700' }}>
            ₹{price}
            <span style={{ textDecoration: 'line-through', marginLeft: '.5rem', color: 'grey' }}>
              {mrp}
            </span>
          </p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
            {showButtons && (
              <>
                <QuantityButton
                  handleDecrement={handleDecrement}
                  quantity={quantity}
                  handleIncrement={handleIncrement}
                  productId={productId} // Pass productId to QuantityButton
                />
              </>
            )}
            {!showButtons && (
              <button variant="contained" className="btn" onClick={handleAddToCart}>
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
