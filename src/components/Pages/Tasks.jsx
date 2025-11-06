import React, { useState } from 'react';
import { Plus, Search, Filter, Clock, AlertCircle, CheckCircle, Calendar, User, FolderKanban, Edit, Trash2, Eye } from 'lucide-react';
import './Tasks.css';

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Sample tasks data
  const tasks = [
    {
      id: 1,
      title: 'API Integration for User Authentication',
      description: 'Implement JWT-based authentication API with login and registration endpoints',
      intern: 'Alice Johnson',
      project: 'E-Commerce Platform',
      priority: 'high',
      status: 'in-progress',
      deadline: '2024-11-10',
      createdDate: '2024-11-01',
      completedDate: null,
      submission: 'Submitted - Awaiting Review',
      submissionDate: '2024-11-08'
    },
    {
      id: 2,
      title: 'Database Schema Design',
      description: 'Design and implement the database schema for the product catalog',
      intern: 'Bob Smith',
      project: 'Finance App',
      priority: 'medium',
      status: 'completed',
      deadline: '2024-11-05',
      createdDate: '2024-10-28',
      completedDate: '2024-11-04',
      submission: 'Reviewed & Approved',
      submissionDate: '2024-11-04'
    },
    {
      id: 3,
      title: 'UI/UX Wireframes for Dashboard',
      description: 'Create wireframes and mockups for the admin dashboard interface',
      intern: 'Carol White',
      project: 'E-Commerce Platform',
      priority: 'high',
      status: 'pending',
      deadline: '2024-11-12',
      createdDate: '2024-11-03',
      completedDate: null,
      submission: null,
      submissionDate: null
    },
    {
      id: 4,
      title: 'Payment Gateway Integration',
      description: 'Integrate Stripe payment gateway for processing transactions',
      intern: 'David Lee',
      project: 'Finance App',
      priority: 'high',
      status: 'in-progress',
      deadline: '2024-11-15',
      createdDate: '2024-11-02',
      completedDate: null,
      submission: null,
      submissionDate: null
    },
    {
      id: 5,
      title: 'Data Visualization Dashboard',
      description: 'Create interactive charts and graphs for analytics dashboard',
      intern: 'Emma Davis',
      project: 'Analytics Dashboard',
      priority: 'medium',
      status: 'pending',
      deadline: '2024-11-18',
      createdDate: '2024-11-05',
      completedDate: null,
      submission: null,
      submissionDate: null
    },
    {
      id: 6,
      title: 'Email Notification System',
      description: 'Implement automated email notifications for user actions',
      intern: 'Alice Johnson',
      project: 'E-Commerce Platform',
      priority: 'low',
      status: 'completed',
      deadline: '2024-11-08',
      createdDate: '2024-10-30',
      completedDate: '2024-11-07',
      submission: 'Reviewed & Approved',
      submissionDate: '2024-11-07'
    },
    {
      id: 7,
      title: 'Mobile Responsive Design',
      description: 'Make the application responsive for mobile and tablet devices',
      intern: 'Carol White',
      project: 'E-Commerce Platform',
      priority: 'medium',
      status: 'in-progress',
      deadline: '2024-11-20',
      createdDate: '2024-11-06',
      completedDate: null,
      submission: null,
      submissionDate: null
    },
    {
      id: 8,
      title: 'Unit Testing Implementation',
      description: 'Write comprehensive unit tests for backend API endpoints',
      intern: 'Bob Smith',
      project: 'Finance App',
      priority: 'medium',
      status: 'pending',
      deadline: '2024-11-22',
      createdDate: '2024-11-07',
      completedDate: null,
      submission: null,
      submissionDate: null
    }
  ];

  // Filter tasks based on active tab
  const getFilteredTasks = () => {
    let filtered = tasks;

    // Filter by status
    if (activeTab !== 'all') {
      filtered = filtered.filter(task => task.status === activeTab);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.intern.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.project.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredTasks = getFilteredTasks();

  // Get task counts
  const taskCounts = {
    all: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    'in-progress': tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    submissions: tasks.filter(t => t.submission && t.submission.includes('Awaiting')).length
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      case 'pending': return 'status-pending';
      default: return '';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle size={16} />;
      case 'in-progress': return <Clock size={16} />;
      case 'pending': return <AlertCircle size={16} />;
      default: return null;
    }
  };

  const handleViewTask = (task) => {
    setSelectedTask(task);
    setShowViewModal(true);
  };

  return (
    <div className="mentor-tasks">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-left">
          <h1 className="page-title">Tasks Management</h1>
          <p className="page-subtitle">View and manage tasks</p>
          <p className="viewing-role">Viewing as: mentor</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          Add New Task
        </button>
      </div>

      {/* Stats Cards */}
      <div className="task-stats">
        <div className="stat-card-task">
          <div className="stat-icon stat-icon-all">
            <FolderKanban size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{taskCounts.all}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
        </div>

        <div className="stat-card-task">
          <div className="stat-icon stat-icon-pending">
            <AlertCircle size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{taskCounts.pending}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>

        <div className="stat-card-task">
          <div className="stat-icon stat-icon-progress">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{taskCounts['in-progress']}</div>
            <div className="stat-label">In Progress</div>
          </div>
        </div>

        <div className="stat-card-task">
          <div className="stat-icon stat-icon-completed">
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{taskCounts.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>

        <div className="stat-card-task">
          <div className="stat-icon stat-icon-submissions">
            <Eye size={24} />
          </div>
          <div className="stat-info">
            <div className="stat-value">{taskCounts.submissions}</div>
            <div className="stat-label">Pending Reviews</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="tasks-filters">
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Tasks ({taskCounts.all})
          </button>
          <button 
            className={`filter-tab ${activeTab === 'pending' ? 'active' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending ({taskCounts.pending})
          </button>
          <button 
            className={`filter-tab ${activeTab === 'in-progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('in-progress')}
          >
            In Progress ({taskCounts['in-progress']})
          </button>
          <button 
            className={`filter-tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({taskCounts.completed})
          </button>
        </div>

        <div className="search-filter-group">
          <div className="search-box">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search tasks, interns, or projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn-filter">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="tasks-table-container">
        <table className="tasks-table">
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Assigned To</th>
              <th>Project</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Submission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map(task => (
                <tr key={task.id}>
                  <td>
                    <div className="task-title-cell">
                      <div className="task-name">{task.title}</div>
                      <div className="task-description-preview">{task.description}</div>
                    </div>
                  </td>
                  <td>
                    <div className="intern-cell">
                      <div className="intern-avatar">{task.intern.charAt(0)}</div>
                      <span>{task.intern}</span>
                    </div>
                  </td>
                  <td>
                    <div className="project-cell">
                      <FolderKanban size={14} />
                      {task.project}
                    </div>
                  </td>
                  <td>
                    <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(task.status)}`}>
                      {getStatusIcon(task.status)}
                      {task.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td>
                    <div className="deadline-cell">
                      <Calendar size={14} />
                      {new Date(task.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </td>
                  <td>
                    {task.submission ? (
                      <span className={`submission-badge ${task.submission.includes('Awaiting') ? 'submission-pending' : 'submission-approved'}`}>
                        {task.submission}
                      </span>
                    ) : (
                      <span className="submission-badge submission-none">Not Submitted</span>
                    )}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" onClick={() => handleViewTask(task)} title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="btn-icon" title="Edit Task">
                        <Edit size={16} />
                      </button>
                      <button className="btn-icon btn-icon-danger" title="Delete Task">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data">
                  No tasks found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Task</h2>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Task Title*</label>
                <input type="text" placeholder="Enter task title" />
              </div>

              <div className="form-group">
                <label>Description*</label>
                <textarea rows="4" placeholder="Enter task description"></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Assign to Intern*</label>
                  <select>
                    <option>Select Intern</option>
                    <option>Alice Johnson</option>
                    <option>Bob Smith</option>
                    <option>Carol White</option>
                    <option>David Lee</option>
                    <option>Emma Davis</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project*</label>
                  <select>
                    <option>Select Project</option>
                    <option>E-Commerce Platform</option>
                    <option>Finance App</option>
                    <option>Analytics Dashboard</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Priority*</label>
                  <select>
                    <option>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Deadline*</label>
                  <input type="date" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
              <button className="btn-primary">Create Task</button>
            </div>
          </div>
        </div>
      )}

      {/* View Task Modal */}
      {showViewModal && selectedTask && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Task Details</h2>
              <button className="modal-close" onClick={() => setShowViewModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="task-detail-header">
                <h3>{selectedTask.title}</h3>
                <div className="task-detail-badges">
                  <span className={`priority-badge ${getPriorityColor(selectedTask.priority)}`}>
                    {selectedTask.priority} Priority
                  </span>
                  <span className={`status-badge ${getStatusColor(selectedTask.status)}`}>
                    {getStatusIcon(selectedTask.status)}
                    {selectedTask.status.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <div className="task-detail-section">
                <label>Description</label>
                <p>{selectedTask.description}</p>
              </div>

              <div className="task-detail-grid">
                <div className="task-detail-item">
                  <label>Assigned To</label>
                  <div className="detail-value">
                    <div className="intern-avatar-small">{selectedTask.intern.charAt(0)}</div>
                    {selectedTask.intern}
                  </div>
                </div>

                <div className="task-detail-item">
                  <label>Project</label>
                  <div className="detail-value">
                    <FolderKanban size={16} />
                    {selectedTask.project}
                  </div>
                </div>

                <div className="task-detail-item">
                  <label>Created Date</label>
                  <div className="detail-value">
                    <Calendar size={16} />
                    {new Date(selectedTask.createdDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>

                <div className="task-detail-item">
                  <label>Deadline</label>
                  <div className="detail-value">
                    <Calendar size={16} />
                    {new Date(selectedTask.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </div>

              {selectedTask.submission && (
                <div className="task-detail-section">
                  <label>Submission Status</label>
                  <div className="submission-details">
                    <span className={`submission-badge ${selectedTask.submission.includes('Awaiting') ? 'submission-pending' : 'submission-approved'}`}>
                      {selectedTask.submission}
                    </span>
                    {selectedTask.submissionDate && (
                      <span className="submission-date">
                        Submitted on {new Date(selectedTask.submissionDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {selectedTask.submission && selectedTask.submission.includes('Awaiting') && (
                <div className="task-detail-section">
                  <label>Review & Feedback</label>
                  <textarea rows="4" placeholder="Enter your review and feedback for the intern..."></textarea>
                  <div className="review-actions">
                    <button className="btn-success">
                      <CheckCircle size={16} />
                      Approve Submission
                    </button>
                    <button className="btn-danger">
                      <AlertCircle size={16} />
                      Request Revision
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowViewModal(false)}>Close</button>
              <button className="btn-primary">
                <Edit size={16} />
                Edit Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;