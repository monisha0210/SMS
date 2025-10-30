import React from 'react';

const Interns = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Interns Management</h1>
      <p className="page-subtitle">View and manage intern profiles</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Interns;