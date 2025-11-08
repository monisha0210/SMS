import React, { useState } from "react";
import { 
  FiCheckCircle, FiClock, FiCalendar, FiFileText, FiTrendingUp,
  FiUser, FiAward, FiBriefcase, FiAlertCircle, FiTarget, FiActivity
} from "react-icons/fi";
import "./InternDashboard.css";

const InternDashboard = () => {
  const [internData] = useState({
    name: "John Doe",
    internId: "INT-2025-001",
    department: "Software Development",
    mentor: "Dr. Sarah Johnson",
    startDate: "2025-01-15",
    endDate: "2025-04-15",
    duration: "3 months",
    profileImage: null
  });

  const [dashboardStats] = useState({
    myTasks: 8,
    completedTasks: 15,
    attendance: 92,
    reportsSubmitted: 24,
    pendingTasks: 3,
    inProgressTasks: 5,
    totalWorkingHours: 324,
    projectProgress: 68
  });

  const [tasks] = useState([
    {
      id: 1,
      title: "Design Database Schema",
      description: "Create comprehensive database schema for the e-commerce platform",
      status: "In Progress",
      priority: "High",
      deadline: "2025-11-10",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      title: "Implement User Authentication",
      description: "Build login and registration system with JWT",
      status: "Pending",
      priority: "High",
      deadline: "2025-11-12",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform"
    },
    {
      id: 3,
      title: "Create API Documentation",
      description: "Document all REST API endpoints with examples",
      status: "In Progress",
      priority: "Medium",
      deadline: "2025-11-15",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform"
    },
    {
      id: 4,
      title: "Unit Testing",
      description: "Write unit tests for authentication module",
      status: "Pending",
      priority: "Medium",
      deadline: "2025-11-18",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform"
    }
  ]);

  const [recentFeedback] = useState([
    {
      id: 1,
      task: "Frontend Component Development",
      mentor: "Dr. Sarah Johnson",
      rating: 4.5,
      comment: "Excellent work on the UI components. Code is clean and well-documented.",
      date: "2025-11-04",
      status: "Approved"
    },
    {
      id: 2,
      task: "API Integration",
      mentor: "Dr. Sarah Johnson",
      rating: 4.0,
      comment: "Good implementation. Consider adding more error handling.",
      date: "2025-11-03",
      status: "Needs Revision"
    },
    {
      id: 3,
      task: "Database Design",
      mentor: "Dr. Sarah Johnson",
      rating: 5.0,
      comment: "Outstanding work! Schema is well-structured and optimized.",
      date: "2025-11-01",
      status: "Approved"
    }
  ]);

  const [attendanceRecords] = useState([
    { date: "2025-11-05", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8h 30m", status: "Present" },
    { date: "2025-11-04", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8h 30m", status: "Present" },
    { date: "2025-11-03", checkIn: "09:00 AM", checkOut: "05:00 PM", hours: "8h 00m", status: "Present" },
    { date: "2025-11-02", checkIn: "09:30 AM", checkOut: "02:00 PM", hours: "4h 30m", status: "Half Day" },
    { date: "2025-11-01", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8h 30m", status: "Present" }
  ]);

  const [projectDetails] = useState({
    name: "E-Commerce Platform Development",
    description: "Build a modern e-commerce platform with payment integration",
    progress: 68,
    startDate: "2025-01-15",
    endDate: "2025-04-15",
    mentor: "Dr. Sarah Johnson",
    milestones: [
      { id: 1, title: "Requirements Analysis", status: "Completed", deadline: "2025-01-30" },
      { id: 2, title: "UI/UX Design", status: "Completed", deadline: "2025-02-15" },
      { id: 3, title: "Frontend Development", status: "In Progress", deadline: "2025-03-15" },
      { id: 4, title: "Backend Integration", status: "Pending", deadline: "2025-04-01" },
      { id: 5, title: "Testing & Deployment", status: "Pending", deadline: "2025-04-15" }
    ]
  });

  const [notifications] = useState([
    { id: 1, type: "task", message: "New task assigned: Unit Testing", time: "2 hours ago", icon: "📋" },
    { id: 2, type: "feedback", message: "Feedback received on Frontend Component", time: "5 hours ago", icon: "💬" },
    { id: 3, type: "deadline", message: "Task deadline approaching: Database Schema", time: "1 day ago", icon: "⏰" },
    { id: 4, type: "approval", message: "Daily report approved by mentor", time: "2 days ago", icon: "✅" }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-progress';
      case 'Pending': return 'status-pending';
      case 'Approved': return 'status-approved';
      case 'Needs Revision': return 'status-revision';
      case 'Present': return 'status-present';
      case 'Half Day': return 'status-halfday';
      default: return 'status-pending';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star filled">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star">★</span>);
    }
    return stars;
  };

  return (
    <div className="intern-dashboard-container">
      {/* Hero Section */}
      <div className="dashboard-hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="intern-avatar-large">
              {internData.profileImage ? (
                <img src={internData.profileImage} alt={internData.name} />
              ) : (
                <span className="avatar-initial">{internData.name.charAt(0)}</span>
              )}
            </div>
            <div className="hero-info">
              <h1 className="hero-title">Welcome back, {internData.name.split(' ')[0]}! 👋</h1>
              <p className="hero-subtitle">Here's your progress overview</p>
              <div className="hero-meta">
                <span className="meta-item">
                  <FiUser size={16} />
                  {internData.internId}
                </span>
                <span className="meta-item">
                  <FiBriefcase size={16} />
                  {internData.department}
                </span>
                <span className="meta-item">
                  <FiCalendar size={16} />
                  {internData.duration} internship
                </span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="mentor-card">
              <p className="mentor-label">Your Mentor</p>
              <h3 className="mentor-name">{internData.mentor}</h3>
              <button className="contact-mentor-btn">
                <FiUser size={16} />
                Contact Mentor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-card card-blue">
            <div className="stat-icon">
              <FiTarget size={28} />
            </div>
            <div className="stat-content">
              <p className="stat-label">My Tasks</p>
              <h2 className="stat-value">{dashboardStats.myTasks}</h2>
              <span className="stat-badge badge-info">{dashboardStats.pendingTasks} Pending</span>
            </div>
          </div>

          <div className="stat-card card-green">
            <div className="stat-icon">
              <FiCheckCircle size={28} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Completed</p>
              <h2 className="stat-value">{dashboardStats.completedTasks}</h2>
              <span className="stat-badge badge-success">All time</span>
            </div>
          </div>

          <div className="stat-card card-purple">
            <div className="stat-icon">
              <FiCalendar size={28} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Attendance</p>
              <h2 className="stat-value">{dashboardStats.attendance}%</h2>
              <span className="stat-badge badge-purple">Excellent</span>
            </div>
          </div>

          <div className="stat-card card-orange">
            <div className="stat-icon">
              <FiFileText size={28} />
            </div>
            <div className="stat-content">
              <p className="stat-label">Reports Submitted</p>
              <h2 className="stat-value">{dashboardStats.reportsSubmitted}</h2>
              <span className="stat-badge badge-warning">This month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-content">
        {/* Left Column */}
        <div className="content-left">
          {/* Current Tasks */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiClock size={22} />
                Current Tasks
              </h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-header">
                    <h3 className="task-title">{task.title}</h3>
                    <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="task-description">{task.description}</p>
                  <div className="task-meta">
                    <span className="task-meta-item">
                      <FiBriefcase size={14} />
                      {task.project}
                    </span>
                    <span className="task-meta-item">
                      <FiCalendar size={14} />
                      Due: {new Date(task.deadline).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="task-footer">
                    <span className={`status-badge ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <button className="task-action-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Progress */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiTrendingUp size={22} />
                Project Progress
              </h2>
            </div>
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-name">{projectDetails.name}</h3>
                <p className="project-description">{projectDetails.description}</p>
              </div>
              <div className="progress-section">
                <div className="progress-header">
                  <span className="progress-label">Overall Progress</span>
                  <span className="progress-percent">{projectDetails.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{width: `${projectDetails.progress}%`}}
                  ></div>
                </div>
              </div>
              <div className="milestones-list">
                <h4 className="milestones-title">Milestones</h4>
                {projectDetails.milestones.map(milestone => (
                  <div key={milestone.id} className="milestone-item">
                    <span className={`milestone-status ${getStatusColor(milestone.status)}`}>
                      {milestone.status === 'Completed' ? '✓' : 
                       milestone.status === 'In Progress' ? '◐' : '○'}
                    </span>
                    <span className="milestone-text">{milestone.title}</span>
                    <span className="milestone-date">
                      {new Date(milestone.deadline).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiCalendar size={22} />
                Recent Attendance
              </h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="attendance-table-wrapper">
              <table className="attendance-mini-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record, index) => (
                    <tr key={index}>
                      <td className="date-cell">{new Date(record.date).toLocaleDateString()}</td>
                      <td>{record.checkIn}</td>
                      <td>{record.checkOut}</td>
                      <td className="hours-cell">{record.hours}</td>
                      <td>
                        <span className={`status-badge ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="content-right">
          {/* Quick Actions */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <button className="action-card">
                <FiCalendar size={24} />
                <span>Mark Attendance</span>
              </button>
              <button className="action-card">
                <FiFileText size={24} />
                <span>Submit Report</span>
              </button>
              <button className="action-card">
                <FiAward size={24} />
                <span>View Certificate</span>
              </button>
              <button className="action-card">
                <FiActivity size={24} />
                <span>Apply Leave</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiAlertCircle size={22} />
                Notifications
              </h2>
            </div>
            <div className="notifications-list">
              {notifications.map(notif => (
                <div key={notif.id} className="notification-item">
                  <span className="notif-icon">{notif.icon}</span>
                  <div className="notif-content">
                    <p className="notif-message">{notif.message}</p>
                    <span className="notif-time">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Feedback */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiAward size={22} />
                Recent Feedback
              </h2>
            </div>
            <div className="feedback-list">
              {recentFeedback.map(feedback => (
                <div key={feedback.id} className="feedback-card">
                  <div className="feedback-header">
                    <h4 className="feedback-task">{feedback.task}</h4>
                    <span className={`status-badge ${getStatusColor(feedback.status)}`}>
                      {feedback.status}
                    </span>
                  </div>
                  <div className="feedback-rating">
                    {renderStars(feedback.rating)}
                    <span className="rating-value">{feedback.rating}/5</span>
                  </div>
                  <p className="feedback-comment">"{feedback.comment}"</p>
                  <div className="feedback-footer">
                    <span className="feedback-mentor">- {feedback.mentor}</span>
                    <span className="feedback-date">{new Date(feedback.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <FiTrendingUp size={22} />
                Performance Overview
              </h2>
            </div>
            <div className="performance-stats">
              <div className="perf-item">
                <div className="perf-label">
                  <span>Task Completion Rate</span>
                  <span className="perf-value">88%</span>
                </div>
                <div className="perf-bar">
                  <div className="perf-fill" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="perf-item">
                <div className="perf-label">
                  <span>Attendance Rate</span>
                  <span className="perf-value">92%</span>
                </div>
                <div className="perf-bar">
                  <div className="perf-fill" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="perf-item">
                <div className="perf-label">
                  <span>Report Submission</span>
                  <span className="perf-value">95%</span>
                </div>
                <div className="perf-bar">
                  <div className="perf-fill" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="perf-item">
                <div className="perf-label">
                  <span>Overall Rating</span>
                  <span className="perf-value">4.5/5</span>
                </div>
                <div className="perf-bar">
                  <div className="perf-fill" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDashboard;