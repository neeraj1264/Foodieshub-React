// CartPage.js

import React from 'react';
import { useCart } from '../../ContextApi';
import './Cart.css'
const CartPage = () => {
    const { cartItems } = useCart();

    return (
        <>
        <hr style={{ marginTop: '5rem' }} />
        <div className="cart-page">
          <h2>Your Cart</h2>
          {cartItems ? (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    {/* Add more table headers as needed */}
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.image} alt={item.name} />
                        </td>
                        <td>{item.name}</td>
                        <td>₹{item.price}</td>
                        <td>{item.quantity}</td>
                        {/* Add more table cells as needed */}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">Your cart is empty</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
      );
    };
    
    export default CartPage;