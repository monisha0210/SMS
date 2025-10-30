import React from 'react';

const Projects = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Projects Management</h1>
      <p className="page-subtitle">Track project progress and milestones</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Projects;