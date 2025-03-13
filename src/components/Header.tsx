import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <div style={{ display: 'flex' }}>
              <img src="/src/assets/logo-part1.svg" alt="Logo Part 1" />
              <img src="/src/assets/logo-part2.svg" alt="Logo Part 2" />
              <img src="/src/assets/logo-part4.svg" alt="Logo Part 4" />
              <img src="/src/assets/logo-part5.svg" alt="Logo Part 5" />
            </div>
          </Link>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <Link 
            to="/" 
            className={`header__nav-item ${isActive('/') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`header__nav-item ${isActive('/about') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`header__nav-item ${isActive('/services') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className={`header__nav-item ${isActive('/portfolio') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link 
            to="/portfolio-showcase" 
            className={`header__nav-item ${isActive('/portfolio-showcase') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Showcase
          </Link>
          <Link 
            to="/blog" 
            className={`header__nav-item ${isActive('/blog') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            to="/articles" 
            className={`header__nav-item ${isActive('/articles') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Articles
          </Link>
          <Link 
            to="/case-studies" 
            className={`header__nav-item ${isActive('/case-studies') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Case Studies
          </Link>
          <Link 
            to="/personal-info" 
            className={`header__nav-item ${isActive('/personal-info') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Profile
          </Link>
          <Link 
            to="/contact" 
            className={`header__nav-item ${isActive('/contact') ? 'header__nav-item--active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="header__actions">
          <div className="header__search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
          <Link to="/contact" className="header__button">Get Started</Link>
          <button className="header__mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 