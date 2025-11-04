import React, { useState } from 'react';
import './Dashboard.css';

const HRDashboard = () => {
  // Sample data
  const [stats] = useState({
    totalInterns: 24,
    totalMentors: 8,
    activeTasks: 42,
    ongoingProjects: 6,
    pendingLeaves: 5,
    completionRate: 78
  });

  const [recentActivities] = useState([
    { id: 1, type: 'report', message: 'John Doe submitted daily report', time: '10 mins ago', icon: '📄' },
    { id: 2, type: 'task', message: 'Sarah Wilson approved task for Jane Smith', time: '25 mins ago', icon: '✅' },
    { id: 3, type: 'leave', message: 'Alex Brown applied for leave', time: '1 hour ago', icon: '🗓️' },
    { id: 4, type: 'attendance', message: 'Mike Johnson marked attendance', time: '2 hours ago', icon: '👤' },
    { id: 5, type: 'project', message: 'E-commerce project milestone completed', time: '3 hours ago', icon: '🎯' }
  ]);

  const [attendanceTrend] = useState([
    { day: 'Mon', percentage: 92 },
    { day: 'Tue', percentage: 88 },
    { day: 'Wed', percentage: 95 },
    { day: 'Thu', percentage: 90 },
    { day: 'Fri', percentage: 87 }
  ]);

  const [taskCompletion] = useState({
    completed: 28,
    inProgress: 10,
    pending: 4
  });

  const [topPerformers] = useState([
    { name: 'John Doe', tasks: 15, attendance: 98, rating: 4.8 },
    { name: 'Jane Smith', tasks: 12, attendance: 95, rating: 4.6 },
    { name: 'Alex Brown', tasks: 18, attendance: 92, rating: 4.9 }
  ]);

  const [pendingApprovals] = useState([
    { id: 1, type: 'Leave', intern: 'Mike Johnson', date: '2025-11-10', reason: 'Medical' },
    { id: 2, type: 'Report', intern: 'Sarah Lee', date: '2025-11-04', reason: 'Weekly Report' },
    { id: 3, type: 'Certificate', intern: 'Tom Wilson', date: '2025-11-05', reason: 'Completion' }
  ]);

  return (
    <div className="dashboard-container">
      {/* SECTION II: HERO SECTION - Welcome Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Welcome back, HR Admin! 👋</h1>
          <p className="hero-subtitle">Here's what's happening with your internship program today.</p>
        </div>
        <div className="hero-actions">
          <button className="btn-primary">
            <span className="btn-icon">➕</span>
            Add Intern
          </button>
          <button className="btn-secondary">
            <span className="btn-icon">📊</span>
            Generate Report
          </button>
        </div>
      </div>

      {/* Summary Cards - Key Metrics */}
      <div className="stats-grid">
        <div className="stat-card card-blue">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Interns</p>
            <h3 className="stat-value">{stats.totalInterns}</h3>
            <span className="stat-badge positive">+3 this week</span>
          </div>
        </div>

        <div className="stat-card card-green">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Mentors</p>
            <h3 className="stat-value">{stats.totalMentors}</h3>
            <span className="stat-badge neutral">Active</span>
          </div>
        </div>

        <div className="stat-card card-orange">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Active Tasks</p>
            <h3 className="stat-value">{stats.activeTasks}</h3>
            <span className="stat-badge warning">{stats.pendingLeaves} pending</span>
          </div>
        </div>

        <div className="stat-card card-purple">
          <div className="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Ongoing Projects</p>
            <h3 className="stat-value">{stats.ongoingProjects}</h3>
            <span className="stat-badge positive">{stats.completionRate}% on track</span>
          </div>
        </div>
      </div>

      {/* SECTION III & IV: Main Content with Charts */}
      <div className="dashboard-grid">
        {/* Attendance Trends Chart */}
        <div className="dashboard-card large-card">
          <div className="card-header">
            <h3 className="card-title">📊 Attendance Trends</h3>
            <select className="card-select">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-container">
            <div className="bar-chart">
              {attendanceTrend.map((day, index) => (
                <div key={index} className="bar-item">
                  <div className="bar-wrapper">
                    <div 
                      className="bar-fill" 
                      style={{ height: `${day.percentage}%` }}
                      data-value={`${day.percentage}%`}
                    ></div>
                  </div>
                  <span className="bar-label">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Task Completion Pie Chart */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">📈 Task Completion</h3>
          </div>
          <div className="pie-chart-container">
            <div className="pie-chart">
              <div className="pie-segment completed" style={{ '--percentage': (taskCompletion.completed / 42 * 100) }}></div>
              <div className="pie-center">
                <span className="pie-percentage">{Math.round(taskCompletion.completed / 42 * 100)}%</span>
                <span className="pie-label">Complete</span>
              </div>
            </div>
            <div className="pie-legend">
              <div className="legend-item">
                <span className="legend-dot completed"></span>
                <span>Completed ({taskCompletion.completed})</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot in-progress"></span>
                <span>In Progress ({taskCompletion.inProgress})</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot pending"></span>
                <span>Pending ({taskCompletion.pending})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">🏆 Top Performers</h3>
          </div>
          <div className="performers-list">
            {topPerformers.map((performer, index) => (
              <div key={index} className="performer-item">
                <div className="performer-rank">#{index + 1}</div>
                <div className="performer-info">
                  <h4>{performer.name}</h4>
                  <div className="performer-stats">
                    <span>✅ {performer.tasks} tasks</span>
                    <span>📅 {performer.attendance}%</span>
                    <span>⭐ {performer.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">⏳ Pending Approvals</h3>
            <span className="badge-count">{pendingApprovals.length}</span>
          </div>
          <div className="approvals-list">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="approval-item">
                <div className="approval-info">
                  <span className="approval-type">{approval.type}</span>
                  <p className="approval-intern">{approval.intern}</p>
                  <span className="approval-date">{approval.date}</span>
                </div>
                <div className="approval-actions">
                  <button className="btn-approve">✓</button>
                  <button className="btn-reject">✗</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION V: Recent Activity & Notifications */}
      <div className="dashboard-grid">
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h3 className="card-title">🔔 Recent Activity</h3>
            <button className="btn-link">View All</button>
          </div>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <p className="activity-message">{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3 className="card-title">⚡ Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <button className="action-btn">
              <span className="action-icon">👥</span>
              <span>Manage Interns</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">👨‍🏫</span>
              <span>Manage Mentors</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📋</span>
              <span>Assign Projects</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">📊</span>
              <span>View Reports</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">🎓</span>
              <span>Generate Certificates</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">⚙️</span>
              <span>System Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;