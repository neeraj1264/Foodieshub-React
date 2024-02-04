import React, { useState } from "react";
import { Button, Modal, Table } from 'react-bootstrap';

const PizzaPage = ({ name, description, price, image, mrp }) => {
  const { priceR, priceM, priceL } = price;

  const [show, setShow] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setSelectedSize('');
    setShow(false);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the item to the cart with the selected size
    handleClose();
  };

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: '700' }}>₹{priceR || price}
            <span style={{ textDecoration: 'line-through', marginLeft: '.5rem', color: 'grey' }}>{mrp}</span>
          </p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
            <button variant="contained" className="btn" onClick={handleShow}>
              ADD
            </button>
            <Modal show={show} onHide={handleClose} style={{ position: 'absolute', bottom: '2px' }}>
              <Modal.Header closeButton>
                <Modal.Title>Select Size</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <h3 style={{textAlign: 'center'}}>{name}</h3>

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Choose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Regular</td>
                      <td>₹{priceR}</td>
                      <td>
                        <input
                          type="radio"
                          value="Regular"
                          checked={selectedSize === 'Regular'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td>₹{priceM}</td>
                      <td>
                        <input
                          type="radio"
                          value="Medium"
                          checked={selectedSize === 'Medium'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                    <tr>
                    <td>Large</td>
                    <td>₹{priceL}</td>
                      <td>
                        <input
                          type="radio"
                          value="Large"
                          checked={selectedSize === 'Large'}
                          onChange={handleSizeChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
