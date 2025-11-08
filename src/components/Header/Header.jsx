import React, { useState } from 'react';
import './Header.css';
import BeforeLoginNav from './BeforeLoginNav';
import AfterLoginNav from './AfterLoginNav';

const Header = ({ isLoggedIn, userRole, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#4F46E5"/>
              <path d="M16 8C13.79 8 12 9.79 12 12C12 14.21 13.79 16 16 16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8ZM16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14ZM16 17C12.67 17 6 18.67 6 22V24H26V22C26 18.67 19.33 17 16 17ZM24 22H8V22.01C8.2 21.29 11.3 19 16 19C20.7 19 23.8 21.29 24 22.01V22Z" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">SMS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {isLoggedIn ? (
            <AfterLoginNav userRole={userRole} onLogout={onLogout} />
          ) : (
            <BeforeLoginNav />
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          {isLoggedIn ? (
            <AfterLoginNav 
              userRole={userRole} 
              onLogout={onLogout} 
              isMobile={true}
              closeMobileMenu={() => setMobileMenuOpen(false)}
            />
          ) : (
            <BeforeLoginNav 
              isMobile={true}
              closeMobileMenu={() => setMobileMenuOpen(false)}
            />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;