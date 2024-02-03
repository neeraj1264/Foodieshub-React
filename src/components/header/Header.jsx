import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(2);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top text-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Foodies Hub
          </Link>

          <NavLink
                  to="/cart"
                  className="nav-link text-white"
                  onClick={handleLinkClick}
                >
                  <FaShoppingCart />
                  {cartItemsCount > 0 && (
                    <Badge bg="danger">{cartItemsCount}</Badge>
                  )}
                </NavLink>
          <button
            className={`navbar-toggler ${navbarOpen ? 'collapsed' : ''} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={navbarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            {/* Custom icons for burger and X */}
            <span className={`navbar-toggler-icon ${navbarOpen ? 'd-none' : ''}`}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
            </span>
            <span className={`navbar-toggler-icon ${navbarOpen ? '' : 'd-none'}`}>
              <i className="fas fa-times text-light fs-2"></i>
            </span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link ${isActive ? 'custom-color' : 'text-white'}`}
                  aria-current="page"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
