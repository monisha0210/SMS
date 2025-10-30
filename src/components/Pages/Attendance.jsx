import React from 'react';

const Attendance = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Attendance Management</h1>
      <p className="page-subtitle">Track and manage attendance records</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Attendance;