import React, { useState } from "react";
import { useCart } from "../../../ContextApi";

const PastaPage = ({ name, description, price, image, mrp }) => {
  const { addToCart } = useCart();


  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: '700' }}>₹{price}
            <span style={{ textDecoration: 'line-through', marginLeft: '.5rem', color: 'grey' }}>{mrp}</span>
          </p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
          <button variant="contained" className="btn" onClick={addToCart}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastaPage;
