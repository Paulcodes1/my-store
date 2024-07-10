import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import vector from '../assets/images/Vector.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
            <img src={vector} alt="Unique Store" />
            <span>Unique Store</span>
        </div>
        <div className="navigation-toggle" onClick={toggleNavigation}>
          &#9776; {/* Hamburger icon */}
        </div>
        <div className={`navigation ${isNavOpen ? 'show' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><a href="#contact">Contact us</a></li>
            <li><button className="sign-in">Sign In</button></li>
          </ul>
        </div>
        {/* <button className="sign-in">Sign In</button> */}
      </div>
    </header>
  );
};

export default Header;
