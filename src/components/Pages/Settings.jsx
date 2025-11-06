import React, { useState } from "react";
import "./Settings.css";

const Settings = ({ userRole }) => {
  const [profile, setProfile] = useState({
    name: "HR Admin",
    email: "hradmin@company.com",
    department: "Human Resources",
    phone: "9876543210",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirmPass) {
      alert("New password and confirm password do not match!");
      return;
    }
    alert("Password changed successfully!");
    setPasswords({ current: "", newPass: "", confirmPass: "" });
  };

  return (
    <div className="settings-container">
      <h1 className="page-title">Settings</h1>
      <p className="page-subtitle">Manage your profile and preferences</p>
      <p className="viewing-role">Viewing as: {userRole}</p>

      <div className="settings-sections">
        {/* Profile Section */}
        <div className="settings-card">
          <h2 className="section-title">Profile Information</h2>
          <form onSubmit={handleSaveProfile} className="settings-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />

            <label>Department</label>
            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleProfileChange}
            />

            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
            />

            <button type="submit" className="save-btn">
              💾 Save Changes
            </button>
          </form>
        </div>

        {/* Password Section */}
        <div className="settings-card">
          <h2 className="section-title">Change Password</h2>
          <form onSubmit={handleChangePassword} className="settings-form">
            <label>Current Password</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handlePasswordChange}
              required
            />

            <label>New Password</label>
            <input
              type="password"
              name="newPass"
              value={passwords.newPass}
              onChange={handlePasswordChange}
              required
            />

            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPass"
              value={passwords.confirmPass}
              onChange={handlePasswordChange}
              required
            />

            <button type="submit" className="save-btn">
              🔒 Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
