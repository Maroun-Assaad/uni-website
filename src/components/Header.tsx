import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fa fa-university"></i> University
      </Link>

      <nav className="header__navbar">
        <ul className="header__nav-list">
          <li>
            <Link to="/" className="nav-list__link fas fa-home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-list__link fas fa-info-circle">
              About
            </Link>
          </li>
          <li>
            <Link to="/courses" className="nav-list__link fas fa-book">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-list__link fa fa-mobile">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/account" className="nav-list__link fas fa-user">
              Login/Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
