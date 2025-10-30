import React from 'react';

const Reports = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Reports & Submissions</h1>
      <p className="page-subtitle">View and manage report submissions</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Reports;