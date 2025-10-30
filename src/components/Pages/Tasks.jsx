import React from 'react';

const Tasks = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Tasks Management</h1>
      <p className="page-subtitle">View and manage tasks</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Tasks;