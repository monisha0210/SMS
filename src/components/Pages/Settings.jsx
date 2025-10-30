import React from 'react';

const Settings = ({ userRole }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Manage your profile and preferences</p>
      <p className="mt-4">Viewing as: {userRole}</p>
    </div>
  );
};

export default Settings;