import React from 'react';

const MentorDashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Mentor Dashboard</h1>
      <p className="page-subtitle">Welcome back, Mentor!</p>
      
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="card">
          <h3>My Interns</h3>
          <p className="text-xl font-bold">5</p>
        </div>
        <div className="card">
          <h3>Active Tasks</h3>
          <p className="text-xl font-bold">12</p>
        </div>
        <div className="card">
          <h3>My Projects</h3>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="card">
          <h3>Pending Reviews</h3>
          <p className="text-xl font-bold">4</p>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;