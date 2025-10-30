import React from 'react';

const HRDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">HR Dashboard</h1>
      <p className="page-subtitle">Welcome back, HR Admin!</p>
      
      <div className="grid grid-cols-4">
        <div className="card">
          <h3>Total Interns</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>24</p>
        </div>
        <div className="card">
          <h3>Total Mentors</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>8</p>
        </div>
        <div className="card">
          <h3>Active Tasks</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>42</p>
        </div>
        <div className="card">
          <h3>Ongoing Projects</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>6</p>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;