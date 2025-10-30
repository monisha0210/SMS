// src/components/Pages/About.jsx
import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Student Management System</h1>
      <p className="page-subtitle">
        A comprehensive solution for managing internship programs efficiently
      </p>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            Our Student Management System is designed to streamline the entire internship lifecycle, 
            from onboarding to certification. We aim to provide a seamless experience for HR administrators, 
            mentors, and interns, ensuring effective communication and transparent tracking of progress.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-heading">What We Offer</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>For HR Administrators</h3>
              <ul>
                <li>Complete system control and oversight</li>
                <li>Manage interns and mentors efficiently</li>
                <li>Assign projects and track performance</li>
                <li>Generate certificates and reports</li>
                <li>Monitor attendance and approve leaves</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>For Mentors</h3>
              <ul>
                <li>View and manage assigned interns</li>
                <li>Create and assign tasks</li>
                <li>Review submissions and provide feedback</li>
                <li>Monitor intern progress and attendance</li>
                <li>Evaluate performance and give ratings</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>For Interns</h3>
              <ul>
                <li>Access personalized dashboard</li>
                <li>Mark daily attendance</li>
                <li>View and complete assigned tasks</li>
                <li>Submit reports and receive feedback</li>
                <li>Track progress and download certificates</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-heading">Why Choose Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <h4>Easy to Use</h4>
              <p>Intuitive interface designed for users of all technical levels</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <h4>Real-time Updates</h4>
              <p>Instant notifications and live progress tracking</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <h4>Secure & Reliable</h4>
              <p>Your data is protected with industry-standard security</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <h4>Comprehensive Reports</h4>
              <p>Detailed analytics and performance insights</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-heading">Our Vision</h2>
          <p className="section-text">
            We envision a world where internship management is effortless, transparent, and productive. 
            By leveraging technology, we help organizations focus on what matters most - nurturing talent 
            and building future professionals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;