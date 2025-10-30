// src/components/Pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Student Management System
          </h1>
          <p className="hero-subtitle">
            Streamline your internship program with our comprehensive management platform
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <svg viewBox="0 0 500 400" fill="none">
            <rect x="50" y="50" width="400" height="300" rx="20" fill="#EEF2FF"/>
            <circle cx="250" cy="150" r="40" fill="#4F46E5"/>
            <rect x="150" y="220" width="200" height="10" rx="5" fill="#C7D2FE"/>
            <rect x="150" y="250" width="150" height="10" rx="5" fill="#C7D2FE"/>
            <rect x="150" y="280" width="180" height="10" rx="5" fill="#C7D2FE"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3>Intern Management</h3>
            <p>Efficiently manage intern profiles, assignments, and progress tracking.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3>Task Tracking</h3>
            <p>Assign, monitor, and evaluate tasks with real-time progress updates.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Attendance System</h3>
            <p>Track daily attendance, working hours, and leave management seamlessly.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3>Reports & Analytics</h3>
            <p>Generate comprehensive reports and performance analytics.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h3>Project Management</h3>
            <p>Organize projects, milestones, and deliverables efficiently.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4F46E5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Certificate Generation</h3>
            <p>Automatically generate and distribute completion certificates.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of organizations managing their internship programs effectively.</p>
        <Link to="/login" className="btn btn-primary btn-lg">
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};

export default Home;