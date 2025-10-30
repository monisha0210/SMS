// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'mentor'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Set user data based on role
    const userData = {
      email: credentials.email,
      role: credentials.role,
      name: credentials.role === 'hr' 
        ? 'HR Admin' 
        : credentials.role === 'mentor' 
        ? 'Sarah Wilson' 
        : 'John Doe'
    };

    // Call parent login handler
    onLogin(userData);
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#4F46E5"/>
              <path d="M16 8C13.79 8 12 9.79 12 12C12 14.21 13.79 16 16 16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8ZM16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14ZM16 17C12.67 17 6 18.67 6 22V24H26V22C26 18.67 19.33 17 16 17ZM24 22H8V22.01C8.2 21.29 11.3 19 16 19C20.7 19 23.8 21.29 24 22.01V22Z" fill="white"/>
            </svg>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login As
            </label>
            <select
              id="role"
              name="role"
              className="form-select"
              value={credentials.role}
              onChange={handleChange}
            >
              <option value="hr">HR Administrator</option>
              <option value="mentor">Mentor</option>
              <option value="intern">Intern</option>
            </select>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#">Contact HR</a></p>
        </div>

        <div className="demo-credentials">
          <p className="demo-title">Demo Credentials:</p>
          <div className="demo-list">
            <div><strong>HR:</strong> hr@example.com</div>
            <div><strong>Mentor:</strong> mentor@example.com</div>
            <div><strong>Intern:</strong> intern@example.com</div>
            <div><strong>Password:</strong> Any password</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;