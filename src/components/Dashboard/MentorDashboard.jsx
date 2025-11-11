import React, { useState } from 'react';
import { Users, ClipboardList, FolderKanban, Clock, CheckCircle, AlertCircle, BarChart3, FileText } from 'lucide-react';
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
    <div className="dashboard-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Welcome back, Mentor! 👋</h1>
          <p>Here's what's happening with your interns today.</p>
        </div>
        <div className="hero-actions">
          <button className="btn-primary">
            <ClipboardList className="btn-icon" size={18} />
            Assign Task
          </button>
          <button className="btn-secondary">
            <BarChart3 className="btn-icon" size={18} />
            View Reports
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card card-blue">
          <div className="stat-icon">
            <Users size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-label">My Interns</div>
            <div className="stat-value">5</div>
            <span className="stat-badge positive">All Active</span>
          </div>
        </div>

        <div className="stat-card card-orange">
          <div className="stat-icon">
            <ClipboardList size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Active Tasks</div>
            <div className="stat-value">12</div>
            <span className="stat-badge warning">3 due today</span>
          </div>
        </div>

        <div className="stat-card card-purple">
          <div className="stat-icon">
            <FolderKanban size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-label">My Projects</div>
            <div className="stat-value">2</div>
            <span className="stat-badge neutral">On Track</span>
          </div>
        </div>

        <div className="stat-card card-green">
          <div className="stat-icon">
            <FileText size={28} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Pending Reviews</div>
            <div className="stat-value">4</div>
            <span className="stat-badge warning">Needs Attention</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Assigned Interns */}
        <div className="dashboard-card large-card">
          <div className="card-header">
            <h3 className="card-title">
              <Users size={20} />
              Assigned Interns
            </h3>
            <button className="btn-link">View All</button>
          </div>
          <div className="card-content">
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Domain</th>
                    <th>Project</th>
                    <th>Attendance</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedInterns.map(intern => (
                    <tr key={intern.id}>
                      <td>
                        <div className="intern-info">
                          <div className="intern-avatar">{intern.name.charAt(0)}</div>
                          <span className="intern-name">{intern.name}</span>
                        </div>
                      </td>
                      <td>{intern.domain}</td>
                      <td>{intern.project}</td>
                      <td>
                        <span className={`attendance-badge ${parseInt(intern.attendance) >= 90 ? 'high' : 'medium'}`}>
                          {intern.attendance}
                        </span>
                      </td>
                      <td>
                        <div className="progress-container">
                          <span className="progress-text">{intern.tasksCompleted}/{intern.totalTasks}</span>
                          <div className="progress-bar-wrapper">
                            <div 
                              className="progress-bar-fill" 
                              style={{width: `${(intern.tasksCompleted/intern.totalTasks)*100}%`}}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="status-badge active">Active</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Assigned Projects */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">
              <FolderKanban size={20} />
              Assigned Projects
            </h3>
          </div>
          <div className="card-content">
            <div className="projects-list">
              {projects.map(project => (
                <div key={project.id} className="project-item">
                  <div className="project-header-row">
                    <h4 className="project-title">{project.name}</h4>
                    <span className="project-status-badge">{project.status}</span>
                  </div>
                  <div className="project-meta">
                    <div className="project-meta-item">
                      <Users size={16} />
                      <span>{project.interns} Interns</span>
                    </div>
                    <div className="project-meta-item">
                      <CheckCircle size={16} />
                      <span>{project.completedMilestones}/{project.milestones} Milestones</span>
                    </div>
                  </div>
                  <div className="project-progress-section">
                    <div className="project-progress-header">
                      <span className="progress-label-text">Progress</span>
                      <span className="progress-percentage">{project.progress}%</span>
                    </div>
                    <div className="progress-bar-wrapper">
                      <div 
                        className="progress-bar-fill purple" 
                        style={{width: `${project.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Reviews */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">
              <ClipboardList size={20} />
              Pending Reviews
              <span className="badge-count">4</span>
            </h3>
          </div>
          <div className="card-content">
            <div className="reviews-list">
              {pendingReviews.map(review => (
                <div key={review.id} className="review-item">
                  <div className="review-left-section">
                    <div className="review-avatar">{review.intern.charAt(0)}</div>
                    <div className="review-details">
                      <div className="review-intern-name">{review.intern}</div>
                      <div className="review-type-text">{review.type}</div>
                      <div className="review-time-text">{review.submitted}</div>
                    </div>
                  </div>
                  <div className="review-actions">
                    <button className="review-action-btn">Review</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h3 className="card-title">
              <Clock size={20} />
              Recent Activity
            </h3>
            <button className="btn-link">View All</button>
          </div>
          <div className="card-content">
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.type === 'report' && <FileText size={20} color="#8b5cf6" />}
                    {activity.type === 'task' && <CheckCircle size={20} color="#10b981" />}
                    {activity.type === 'leave' && <AlertCircle size={20} color="#f59e0b" />}
                    {activity.type === 'attendance' && <Clock size={20} color="#3b82f6" />}
                  </div>
                  <div className="activity-content">
                    <div className="activity-message">
                      <strong>{activity.intern}</strong> {activity.action}
                    </div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;