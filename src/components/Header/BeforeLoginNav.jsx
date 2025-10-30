// src/components/Header/BeforeLoginNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const BeforeLoginNav = ({ isMobile, closeMobileMenu }) => {
  const handleClick = () => {
    if (isMobile && closeMobileMenu) {
      closeMobileMenu();
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
    { name: 'Login', path: '/login', icon: 'login', isButton: true }
  ];

  return (
    <ul className={`nav-list ${isMobile ? 'mobile' : ''}`}>
      {navItems.map((item) => (
        <li key={item.name} className="nav-item">
          <Link 
            to={item.path} 
            className={`nav-link ${item.isButton ? 'nav-btn' : ''}`}
            onClick={handleClick}
          >
            {isMobile && (
              <span className="nav-icon">
                {getIcon(item.icon)}
              </span>
            )}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Icon helper function
const getIcon = (iconName) => {
  const icons = {
    home: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    info: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    mail: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    login: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
    )
  };
  return icons[iconName];
};

export default BeforeLoginNav;