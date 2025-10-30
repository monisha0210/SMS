import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Auth Pages
import Login from './components/Auth/Login';

// Public Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

// Dashboard Pages - All use default exports now
import HRDashboard from './components/Dashboard/HRDashboard';
import MentorDashboard from './components/Dashboard/MentorDashboard';
import InternDashboard from './components/Dashboard/InternDashboard';

// Common Pages - All use default exports now
import Interns from './components/Pages/Interns';
import Mentors from './components/Pages/Mentors';
import Attendance from './components/Pages/Attendance';
import Tasks from './components/Pages/Tasks';
import Projects from './components/Pages/Projects';
import Reports from './components/Pages/Reports';
import Settings from './components/Pages/Settings';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login Handler
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout Handler
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Protected Route Component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (isLoading) {
      return (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      );
    }

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/dashboard" replace />;
    }

    return children;
  };

  // Get Dashboard based on role
  const getDashboard = () => {
    if (!user) return <Navigate to="/login" replace />;

    switch (user.role) {
      case 'hr':
        return <HRDashboard />;
      case 'mentor':
        return <MentorDashboard />;
      case 'intern':
        return <InternDashboard />;
      default:
        return <Navigate to="/login" replace />;
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Header 
          isLoggedIn={!!user} 
          userRole={user?.role} 
          onLogout={handleLogout} 
        />
        
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />} 
            />

            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  {getDashboard()}
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/interns" 
              element={
                <ProtectedRoute allowedRoles={['hr', 'mentor']}>
                  <Interns userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/mentors" 
              element={
                <ProtectedRoute allowedRoles={['hr']}>
                  <Mentors />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/attendance" 
              element={
                <ProtectedRoute allowedRoles={['hr', 'intern']}>
                  <Attendance userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/tasks" 
              element={
                <ProtectedRoute>
                  <Tasks userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/projects" 
              element={
                <ProtectedRoute allowedRoles={['hr', 'mentor']}>
                  <Projects userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/reports" 
              element={
                <ProtectedRoute>
                  <Reports userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Settings userRole={user?.role} />
                </ProtectedRoute>
              } 
            />

            {/* Catch all - redirect to home or dashboard */}
            <Route 
              path="*" 
              element={<Navigate to={user ? "/dashboard" : "/"} replace />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;