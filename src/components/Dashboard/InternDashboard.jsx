import React from 'react';

const InternDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Intern Dashboard</h1>
      <p className="page-subtitle">Welcome back, Intern!</p>
      
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="card">
          <h3>My Tasks</h3>
          <p className="text-xl font-bold">8</p>
        </div>
        <div className="card">
          <h3>Completed</h3>
          <p className="text-xl font-bold">15</p>
        </div>
        <div className="card">
          <h3>Attendance</h3>
          <p className="text-xl font-bold">92%</p>
        </div>
        <div className="card">
          <h3>Reports Submitted</h3>
          <p className="text-xl font-bold">24</p>
        </div>
      </div>
    </div>
  );
};

export default InternDashboard;