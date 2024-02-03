import React from 'react';
import Cards from '../Cards';

const PizzaData = [
  { id: 1, name: 'Farm House Pizza', image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: 200, mrp: '300' },
  { id: 2, name: 'Farm House Pizza', image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: 200, mrp: '300' },
  { id: 3, name: 'Farm House Pizza', image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: 200, mrp: '300' },
  { id: 4, name: 'Farm House Pizza', image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: 200, mrp: '300' },
  { id: 5, name: 'Farm House Pizza', image: '/img/pizza.png', description: 'Classic Pizza with meat sauce.', price: 200, mrp: '300' },


];
const Pizza = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center' , marginTop: '4rem'}}>Delicious Pizza</h2>
      {PizzaData.map((Pizza) => (
        <Cards key={Pizza.id} {...Pizza} />
      ))}
    </div>
  );
};

export default Pizza;
