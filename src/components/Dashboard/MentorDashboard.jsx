import React, { useState } from 'react';
import { Users, ClipboardList, FolderKanban, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import './MentorDashboard.css';

const MentorDashboard = () => {
  // Sample data
  const assignedInterns = [
    { id: 1, name: 'Alice Johnson', domain: 'Web Development', project: 'E-Commerce Platform', duration: '3 months', attendance: '95%', status: 'active', tasksCompleted: 8, totalTasks: 10 },
    { id: 2, name: 'Bob Smith', domain: 'Mobile Development', project: 'Finance App', duration: '6 months', attendance: '88%', status: 'active', tasksCompleted: 12, totalTasks: 15 },
    { id: 3, name: 'Carol White', domain: 'UI/UX Design', project: 'E-Commerce Platform', duration: '3 months', attendance: '92%', status: 'active', tasksCompleted: 7, totalTasks: 9 },
    { id: 4, name: 'David Lee', domain: 'Backend Development', project: 'Finance App', duration: '6 months', attendance: '90%', status: 'active', tasksCompleted: 10, totalTasks: 12 },
    { id: 5, name: 'Emma Davis', domain: 'Data Analysis', project: 'Analytics Dashboard', duration: '4 months', attendance: '87%', status: 'active', tasksCompleted: 6, totalTasks: 8 }
  ];

  const projects = [
    { id: 1, name: 'E-Commerce Platform', status: 'In Progress', progress: 75, interns: 2, milestones: 8, completedMilestones: 6 },
    { id: 2, name: 'Finance App', status: 'In Progress', progress: 60, interns: 2, milestones: 10, completedMilestones: 6 }
  ];

  const recentActivities = [
    { id: 1, intern: 'Alice Johnson', action: 'submitted daily report', time: '2 hours ago', type: 'report' },
    { id: 2, intern: 'Bob Smith', action: 'completed task "API Integration"', time: '4 hours ago', type: 'task' },
    { id: 3, intern: 'Carol White', action: 'requested leave for tomorrow', time: '5 hours ago', type: 'leave' },
    { id: 4, intern: 'David Lee', action: 'submitted weekly report', time: '1 day ago', type: 'report' },
    { id: 5, intern: 'Emma Davis', action: 'marked attendance', time: '2 days ago', type: 'attendance' }
  ];

  const pendingReviews = [
    { id: 1, intern: 'Alice Johnson', type: 'Daily Report', submitted: '2 hours ago', priority: 'high' },
    { id: 2, intern: 'Bob Smith', type: 'Task Submission', submitted: '4 hours ago', priority: 'medium' },
    { id: 3, intern: 'Carol White', type: 'Weekly Report', submitted: '1 day ago', priority: 'high' },
    { id: 4, intern: 'David Lee', type: 'Project Milestone', submitted: '1 day ago', priority: 'high' }
  ];

  return (
    <div className="mentor-dashboard">
      {/* Hero Section */}
      <section className="hero">
        <div>
          <h2 className="hero-title">Mentor Dashboard</h2>
          <p className="hero-subtitle">Welcome back, Mentor!</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="stats-section">
        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">My Interns</span>
            </div>
            <div className="stat-value">5</div>
            <div className="stat-badge">All Active</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">Active Tasks</span>
            </div>
            <div className="stat-value">12</div>
            <div className="stat-badge stat-badge-warning">3 due today</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">My Projects</span>
            </div>
            <div className="stat-value">2</div>
            <div className="stat-badge stat-badge-blue">On Track</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">Pending Reviews</span>
            </div>
            <div className="stat-value">4</div>
            <div className="stat-badge stat-badge-red">Needs Attention</div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Assigned Interns */}
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Users size={20} className="card-icon" />
              Assigned Interns
            </h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="card-content">
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-header">Name</th>
                    <th className="table-header">Domain</th>
                    <th className="table-header">Project</th>
                    <th className="table-header">Attendance</th>
                    <th className="table-header">Progress</th>
                    <th className="table-header">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedInterns.map(intern => (
                    <tr key={intern.id} className="table-row">
                      <td className="table-cell">
                        <div className="intern-name">
                          <div className="avatar">{intern.name.charAt(0)}</div>
                          <span>{intern.name}</span>
                        </div>
                      </td>
                      <td className="table-cell">{intern.domain}</td>
                      <td className="table-cell">{intern.project}</td>
                      <td className="table-cell">
                        <span className={`badge ${parseInt(intern.attendance) >= 90 ? 'badge-success' : 'badge-warning'}`}>
                          {intern.attendance}
                        </span>
                      </td>
                      <td className="table-cell">
                        <div className="progress-info">
                          <span className="progress-text">{intern.tasksCompleted}/{intern.totalTasks}</span>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{width: `${(intern.tasksCompleted/intern.totalTasks)*100}%`}}></div>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">
                        <span className="status-active">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Projects Overview */}
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">
              <FolderKanban size={20} className="card-icon" />
              Assigned Projects
            </h3>
          </div>
          <div className="card-content">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h4 className="project-name">{project.name}</h4>
                  <span className="badge badge-blue">{project.status}</span>
                </div>
                <div className="project-details">
                  <div className="project-detail">
                    <Users size={16} color="#6b7280" />
                    <span>{project.interns} Interns</span>
                  </div>
                  <div className="project-detail">
                    <CheckCircle size={16} color="#6b7280" />
                    <span>{project.completedMilestones}/{project.milestones} Milestones</span>
                  </div>
                </div>
                <div className="project-progress">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-value">{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill progress-fill-purple" style={{width: `${project.progress}%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid">
        {/* Pending Reviews */}
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">
              <ClipboardList size={20} className="card-icon" />
              Pending Reviews
            </h3>
          </div>
          <div className="card-content">
            {pendingReviews.map(review => (
              <div key={review.id} className="review-item">
                <div className="review-left">
                  <div className="avatar">{review.intern.charAt(0)}</div>
                  <div>
                    <div className="review-intern">{review.intern}</div>
                    <div className="review-type">{review.type}</div>
                  </div>
                </div>
                <div className="review-right">
                  <span className="review-time">{review.submitted}</span>
                  <button className="review-btn">Review</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activities */}
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">
              <Clock size={20} className="card-icon" />
              Recent Activity
            </h3>
          </div>
          <div className="card-content">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'report' && <ClipboardList size={16} color="#8b5cf6" />}
                  {activity.type === 'task' && <CheckCircle size={16} color="#10b981" />}
                  {activity.type === 'leave' && <AlertCircle size={16} color="#f59e0b" />}
                  {activity.type === 'attendance' && <Clock size={16} color="#3b82f6" />}
                </div>
                <div className="activity-content">
                  <div className="activity-text">
                    <strong>{activity.intern}</strong> {activity.action}
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentorDashboard;