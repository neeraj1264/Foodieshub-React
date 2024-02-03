import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Pizza', image: '/img/pizza.png', path: '/g-1.jpg' },
  { id: 2, name: 'Burger', image: '/img/burger.png', path: '/s-img-2.jpg' },
  { id: 3, name: 'Pizza', image: '/img/pizza.png', path: '/g-1.jpg' },
  { id: 4, name: 'Pasta', image: '/img/pasta.png', path: '/g-1.jpg' },
  { id: 5, name: 'Pizza', image: '/img/pizza.png', path: '/g-1.jpg' },
  { id: 6, name: 'Burger', image: '/img/burger.png', path: '/s-img-2.jpg' },
  { id: 7, name: 'Pizza', image: '/img/pizza.png', path: '/g-1.jpg' },
  { id: 8, name: 'Pasta', image: '/img/pasta.png', path: '/g-1.jpg' },
];

function Category() {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Categories</h2>
      <div className="outer-card">
        {categories.map((category) => (
          <Link to={`/${encodeURIComponent(category.name)}`} key={category.id}>
            <div className="card">
              <img src={category.image} className="card-img-top" alt={category.name} />
              <div className="card-body">
                <p className="card-text">{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Category;
