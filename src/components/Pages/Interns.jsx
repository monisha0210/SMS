import React, { useState } from 'react';
import {
  FiUser, FiEdit2, FiTrash2, FiEye, FiPlus, FiSearch, FiFilter,
  FiMail, FiPhone, FiCalendar, FiMapPin, FiFileText, FiUpload,
  FiCheckCircle, FiClock, FiAlertCircle, FiTarget, FiBriefcase
} from 'react-icons/fi';
import './Interns.css';

const Interns = ({ userRole = 'hr' }) => {
  // User role can be 'hr', 'mentor', or 'intern'
  
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: "John Doe",
      internId: "INT-2025-001",
      email: "john.doe@email.com",
      phone: "+91 9876543210",
      department: "Software Development",
      domain: "Full Stack Development",
      college: "MIT University",
      degree: "B.Tech Computer Science",
      year: "3rd Year",
      cgpa: "8.5",
      startDate: "2025-01-15",
      endDate: "2025-04-15",
      duration: "3 months",
      mentor: "Dr. Sarah Johnson",
      mentorId: 1,
      project: "E-Commerce Platform",
      status: "Active",
      attendance: 92,
      tasksCompleted: 15,
      reportsSubmitted: 24,
      documents: {
        resume: "john_resume.pdf",
        offerLetter: "john_offer.pdf",
        idProof: "john_id.pdf"
      },
      address: "123 Main St, Chennai",
      joinedDate: "2025-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      internId: "INT-2025-002",
      email: "jane.smith@email.com",
      phone: "+91 9876543211",
      department: "Design",
      domain: "UI/UX Design",
      college: "Design Institute",
      degree: "B.Des",
      year: "Final Year",
      cgpa: "9.0",
      startDate: "2025-02-01",
      endDate: "2025-05-01",
      duration: "3 months",
      mentor: "Prof. Michael Chen",
      mentorId: 2,
      project: "Mobile App UI Redesign",
      status: "Active",
      attendance: 95,
      tasksCompleted: 12,
      reportsSubmitted: 20,
      documents: {
        resume: "jane_resume.pdf",
        offerLetter: "jane_offer.pdf",
        idProof: "jane_id.pdf"
      },
      address: "456 Park Ave, Mumbai",
      joinedDate: "2025-02-01"
    },
    {
      id: 3,
      name: "Alex Brown",
      internId: "INT-2025-003",
      email: "alex.brown@email.com",
      phone: "+91 9876543212",
      department: "Data Science",
      domain: "Machine Learning",
      college: "Tech University",
      degree: "M.Tech AI/ML",
      year: "1st Year",
      cgpa: "8.8",
      startDate: "2025-01-20",
      endDate: "2025-06-20",
      duration: "5 months",
      mentor: "Dr. Emily Rodriguez",
      mentorId: 3,
      project: "Data Analytics Dashboard",
      status: "Active",
      attendance: 88,
      tasksCompleted: 18,
      reportsSubmitted: 28,
      documents: {
        resume: "alex_resume.pdf",
        offerLetter: "alex_offer.pdf",
        idProof: "alex_id.pdf"
      },
      address: "789 Tech Park, Bangalore",
      joinedDate: "2025-01-20"
    }
  ]);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Database Schema",
      description: "Create comprehensive database schema for the e-commerce platform",
      internId: 1,
      internName: "John Doe",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform",
      priority: "High",
      status: "In Progress",
      deadline: "2025-11-10",
      assignedDate: "2025-11-01",
      completedDate: null
    },
    {
      id: 2,
      title: "Implement User Authentication",
      description: "Build login and registration system with JWT",
      internId: 1,
      internName: "John Doe",
      assignedBy: "Dr. Sarah Johnson",
      project: "E-Commerce Platform",
      priority: "High",
      status: "Pending",
      deadline: "2025-11-12",
      assignedDate: "2025-11-02",
      completedDate: null
    },
    {
      id: 3,
      title: "Create Wireframes",
      description: "Design wireframes for mobile app redesign",
      internId: 2,
      internName: "Jane Smith",
      assignedBy: "Prof. Michael Chen",
      project: "Mobile App UI Redesign",
      priority: "High",
      status: "In Progress",
      deadline: "2025-11-09",
      assignedDate: "2025-11-01",
      completedDate: null
    },
    {
      id: 4,
      title: "Data Collection",
      description: "Collect and prepare dataset for analysis",
      internId: 3,
      internName: "Alex Brown",
      assignedBy: "Dr. Emily Rodriguez",
      project: "Data Analytics Dashboard",
      priority: "Medium",
      status: "Completed",
      deadline: "2025-11-05",
      assignedDate: "2025-10-28",
      completedDate: "2025-11-04"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [viewDetails, setViewDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedInternForTask, setSelectedInternForTask] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    domain: '',
    college: '',
    degree: '',
    year: '',
    cgpa: '',
    startDate: '',
    endDate: '',
    mentor: '',
    mentorId: '',
    project: '',
    address: '',
    documents: {}
  });

  const [taskFormData, setTaskFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    deadline: '',
    project: ''
  });

  const mentors = [
    { id: 1, name: "Dr. Sarah Johnson", department: "Software Development" },
    { id: 2, name: "Prof. Michael Chen", department: "Design" },
    { id: 3, name: "Dr. Emily Rodriguez", department: "Data Science" }
  ];

  // Get current mentor's ID (for demo, using 1)
  const currentMentorId = userRole === 'mentor' ? 1 : null;
  const currentInternId = userRole === 'intern' ? 1 : null;

  // Filter interns based on user role
  const getFilteredInterns = () => {
    let filtered = interns;

    if (userRole === 'mentor') {
      filtered = filtered.filter(intern => intern.mentorId === currentMentorId);
    }

    if (searchTerm) {
      filtered = filtered.filter(intern =>
        intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        intern.internId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        intern.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'All') {
      filtered = filtered.filter(intern => intern.status === filterStatus);
    }

    return filtered;
  };

  // Filter tasks based on user role
  const getFilteredTasks = () => {
    if (userRole === 'intern') {
      return tasks.filter(task => task.internId === currentInternId);
    } else if (userRole === 'mentor') {
      return tasks.filter(task => 
        interns.find(intern => intern.id === task.internId && intern.mentorId === currentMentorId)
      );
    }
    return tasks;
  };

  const openModal = (mode, intern = null) => {
    setModalMode(mode);
    setSelectedIntern(intern);
    if (mode === 'edit' && intern) {
      setFormData({
        name: intern.name,
        email: intern.email,
        phone: intern.phone,
        department: intern.department,
        domain: intern.domain,
        college: intern.college,
        degree: intern.degree,
        year: intern.year,
        cgpa: intern.cgpa,
        startDate: intern.startDate,
        endDate: intern.endDate,
        mentor: intern.mentor,
        mentorId: intern.mentorId,
        project: intern.project,
        address: intern.address,
        documents: intern.documents
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        domain: '',
        college: '',
        degree: '',
        year: '',
        cgpa: '',
        startDate: '',
        endDate: '',
        mentor: '',
        mentorId: '',
        project: '',
        address: '',
        documents: {}
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIntern(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (modalMode === 'add') {
      const newIntern = {
        ...formData,
        id: Date.now(),
        internId: `INT-2025-${String(interns.length + 1).padStart(3, '0')}`,
        status: 'Active',
        attendance: 0,
        tasksCompleted: 0,
        reportsSubmitted: 0,
        joinedDate: formData.startDate,
        duration: calculateDuration(formData.startDate, formData.endDate)
      };
      setInterns([...interns, newIntern]);
    } else if (modalMode === 'edit') {
      setInterns(interns.map(intern =>
        intern.id === selectedIntern.id ? { ...intern, ...formData } : intern
      ));
    }
    
    closeModal();
  };

  const deleteIntern = (id) => {
    if (window.confirm('Are you sure you want to delete this intern?')) {
      setInterns(interns.filter(intern => intern.id !== id));
    }
  };

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const months = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24 * 30));
    return `${months} month${months !== 1 ? 's' : ''}`;
  };

  const handleMentorChange = (e) => {
    const mentorId = parseInt(e.target.value);
    const mentor = mentors.find(m => m.id === mentorId);
    if (mentor) {
      setFormData({
        ...formData,
        mentorId: mentor.id,
        mentor: mentor.name,
        department: mentor.department
      });
    }
  };

  const openTaskModal = (intern) => {
    setSelectedInternForTask(intern);
    setTaskFormData({
      title: '',
      description: '',
      priority: 'Medium',
      deadline: '',
      project: intern.project
    });
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
    setSelectedInternForTask(null);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    
    const newTask = {
      id: Date.now(),
      ...taskFormData,
      internId: selectedInternForTask.id,
      internName: selectedInternForTask.name,
      assignedBy: selectedInternForTask.mentor,
      status: 'Pending',
      assignedDate: new Date().toISOString().split('T')[0],
      completedDate: null
    };

    setTasks([...tasks, newTask]);
    closeTaskModal();
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? {
            ...task,
            status: newStatus,
            completedDate: newStatus === 'Completed' ? new Date().toISOString().split('T')[0] : null
          }
        : task
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'status-active';
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-progress';
      case 'Pending': return 'status-pending';
      case 'Inactive': return 'status-inactive';
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

  const filteredInterns = getFilteredInterns();
  const filteredTasks = getFilteredTasks();

  return (
    <div className="interns-container">
      {/* Header */}
      <div className="interns-header">
        <div className="header-content">
          <h1 className="page-title">
            {userRole === 'hr' && '👥 Intern Management'}
            {userRole === 'mentor' && '👥 My Assigned Interns'}
            {userRole === 'intern' && '📋 My Tasks'}
          </h1>
          <p className="page-subtitle">
            {userRole === 'hr' && 'Add, manage and track intern information'}
            {userRole === 'mentor' && 'View and manage your assigned interns'}
            {userRole === 'intern' && 'View and update your assigned tasks'}
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        {userRole !== 'intern' && (
          <>
            <div className="stat-card stat-blue">
              <div className="stat-icon">
                <FiUser size={28} />
              </div>
              <div className="stat-content">
                <p className="stat-label">Total Interns</p>
                <h2 className="stat-value">{filteredInterns.length}</h2>
              </div>
            </div>
            <div className="stat-card stat-green">
              <div className="stat-icon">
                <FiCheckCircle size={28} />
              </div>
              <div className="stat-content">
                <p className="stat-label">Active Interns</p>
                <h2 className="stat-value">
                  {filteredInterns.filter(i => i.status === 'Active').length}
                </h2>
              </div>
            </div>
          </>
        )}
        <div className="stat-card stat-orange">
          <div className="stat-icon">
            <FiTarget size={28} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Tasks</p>
            <h2 className="stat-value">{filteredTasks.length}</h2>
          </div>
        </div>
        <div className="stat-card stat-purple">
          <div className="stat-icon">
            <FiCheckCircle size={28} />
          </div>
          <div className="stat-content">
            <p className="stat-label">Completed Tasks</p>
            <h2 className="stat-value">
              {filteredTasks.filter(t => t.status === 'Completed').length}
            </h2>
          </div>
        </div>
      </div>

      {/* Action Bar - Only for HR and Mentor */}
      {userRole !== 'intern' && (
        <div className="action-bar">
          <div className="search-filter-group">
            <div className="search-box">
              <FiSearch size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search interns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          {userRole === 'hr' && (
            <button onClick={() => openModal('add')} className="add-btn">
              <FiPlus size={20} />
              Add New Intern
            </button>
          )}
        </div>
      )}

      {/* Interns Grid/List for HR and Mentor */}
      {userRole !== 'intern' && (
        <div className="interns-grid">
          {filteredInterns.map(intern => (
            <div key={intern.id} className="intern-card">
              <div className="intern-card-header">
                <div className="intern-avatar">
                  {intern.name.charAt(0)}
                </div>
                <div className="intern-basic-info">
                  <h3 className="intern-name">{intern.name}</h3>
                  <p className="intern-id">{intern.internId}</p>
                </div>
                <span className={`status-badge ${getStatusColor(intern.status)}`}>
                  {intern.status}
                </span>
              </div>

              <div className="intern-card-body">
                <div className="info-row">
                  <FiMail size={16} />
                  <span>{intern.email}</span>
                </div>
                <div className="info-row">
                  <FiPhone size={16} />
                  <span>{intern.phone}</span>
                </div>
                <div className="info-row">
                  <FiBriefcase size={16} />
                  <span>{intern.department}</span>
                </div>
                <div className="info-row">
                  <FiUser size={16} />
                  <span>Mentor: {intern.mentor}</span>
                </div>
                <div className="info-row">
                  <FiCalendar size={16} />
                  <span>{intern.duration}</span>
                </div>
              </div>

              <div className="intern-stats-row">
                <div className="mini-stat">
                  <span className="mini-stat-value">{intern.attendance}%</span>
                  <span className="mini-stat-label">Attendance</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-value">{intern.tasksCompleted}</span>
                  <span className="mini-stat-label">Tasks Done</span>
                </div>
                <div className="mini-stat">
                  <span className="mini-stat-value">{intern.reportsSubmitted}</span>
                  <span className="mini-stat-label">Reports</span>
                </div>
              </div>

              <div className="intern-card-footer">
                <button
                  onClick={() => setViewDetails(intern)}
                  className="action-btn btn-view"
                >
                  <FiEye size={16} />
                  View
                </button>
                {userRole === 'mentor' && (
                  <button
                    onClick={() => openTaskModal(intern)}
                    className="action-btn btn-task"
                  >
                    <FiPlus size={16} />
                    Assign Task
                  </button>
                )}
                {userRole === 'hr' && (
                  <>
                    <button
                      onClick={() => openModal('edit', intern)}
                      className="action-btn btn-edit"
                    >
                      <FiEdit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteIntern(intern.id)}
                      className="action-btn btn-delete"
                    >
                      <FiTrash2 size={16} />
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tasks View for Intern */}
      {userRole === 'intern' && (
        <div className="tasks-section">
          <div className="tasks-list">
            {filteredTasks.map(task => (
              <div key={task.id} className="task-card-detailed">
                <div className="task-card-header">
                  <div>
                    <h3 className="task-title">{task.title}</h3>
                    <p className="task-project">
                      <FiBriefcase size={14} />
                      {task.project}
                    </p>
                  </div>
                  <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                    {task.priority} Priority
                  </span>
                </div>

                <p className="task-description">{task.description}</p>

                <div className="task-meta-grid">
                  <div className="task-meta-item">
                    <FiUser size={16} />
                    <div>
                      <span className="meta-label">Assigned By</span>
                      <span className="meta-value">{task.assignedBy}</span>
                    </div>
                  </div>
                  <div className="task-meta-item">
                    <FiCalendar size={16} />
                    <div>
                      <span className="meta-label">Deadline</span>
                      <span className="meta-value">
                        {new Date(task.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="task-meta-item">
                    <FiClock size={16} />
                    <div>
                      <span className="meta-label">Assigned On</span>
                      <span className="meta-value">
                        {new Date(task.assignedDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="task-card-footer">
                  <span className={`status-badge ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                  <div className="task-actions">
                    {task.status === 'Pending' && (
                      <button
                        onClick={() => updateTaskStatus(task.id, 'In Progress')}
                        className="task-action-btn btn-start"
                      >
                        Start Task
                      </button>
                    )}
                    {task.status === 'In Progress' && (
                      <button
                        onClick={() => updateTaskStatus(task.id, 'Completed')}
                        className="task-action-btn btn-complete"
                      >
                        Mark Complete
                      </button>
                    )}
                    {task.status === 'Completed' && (
                      <span className="completed-badge">
                        <FiCheckCircle size={16} />
                        Completed on {new Date(task.completedDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tasks Section for Mentor */}
      {userRole === 'mentor' && (
        <div className="tasks-section">
          <div className="section-header">
            <h2 className="section-title">Assigned Tasks</h2>
          </div>
          <div className="tasks-table-wrapper">
            <table className="tasks-table">
              <thead>
                <tr>
                  <th>Task Title</th>
                  <th>Intern</th>
                  <th>Project</th>
                  <th>Priority</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map(task => (
                  <tr key={task.id}>
                    <td className="task-title-cell">{task.title}</td>
                    <td>{task.internName}</td>
                    <td>{task.project}</td>
                    <td>
                      <span className={`priority-badge ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td>{new Date(task.deadline).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td>
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add/Edit Intern Modal */}
      {showModal && userRole === 'hr' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {modalMode === 'add' ? 'Add New Intern' : 'Edit Intern'}
              </h2>
              <button onClick={closeModal} className="close-btn">×</button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="form-input"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="form-input"
                      placeholder="Enter address"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Academic Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">College/University *</label>
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
                      className="form-input"
                      placeholder="Enter college name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Degree *</label>
                    <input
                      type="text"
                      required
                      value={formData.degree}
                      onChange={(e) => setFormData({...formData, degree: e.target.value})}
                      className="form-input"
                      placeholder="e.g., B.Tech CSE"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Year *</label>
                    <select
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                      className="form-input"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="Final Year">Final Year</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">CGPA *</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={formData.cgpa}
                      onChange={(e) => setFormData({...formData, cgpa: e.target.value})}
                      className="form-input"
                      placeholder="Enter CGPA"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Internship Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Domain *</label>
                    <input
                      type="text"
                      required
                      value={formData.domain}
                      onChange={(e) => setFormData({...formData, domain: e.target.value})}
                      className="form-input"
                      placeholder="e.g., Full Stack Development"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project *</label>
                    <input
                      type="text"
                      required
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      className="form-input"
                      placeholder="Enter project name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Assign Mentor *</label>
                    <select
                      required
                      value={formData.mentorId}
                      onChange={handleMentorChange}
                      className="form-input"
                    >
                      <option value="">Select Mentor</option>
                      {mentors.map(mentor => (
                        <option key={mentor.id} value={mentor.id}>
                          {mentor.name} - {mentor.department}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <input
                      type="text"
                      value={formData.department}
                      readOnly
                      className="form-input"
                      placeholder="Auto-filled from mentor"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Start Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">End Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Documents Upload</h3>
                <div className="upload-grid">
                  <div className="upload-item">
                    <label className="upload-label">
                      <FiUpload size={20} />
                      <span>Resume</span>
                    </label>
                    <input type="file" className="file-input" accept=".pdf,.doc,.docx" />
                  </div>
                  <div className="upload-item">
                    <label className="upload-label">
                      <FiUpload size={20} />
                      <span>Offer Letter</span>
                    </label>
                    <input type="file" className="file-input" accept=".pdf" />
                  </div>
                  <div className="upload-item">
                    <label className="upload-label">
                      <FiUpload size={20} />
                      <span>ID Proof</span>
                    </label>
                    <input type="file" className="file-input" accept=".pdf,.jpg,.png" />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={closeModal} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {modalMode === 'add' ? 'Add Intern' : 'Update Intern'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewDetails && (
        <div className="modal-overlay" onClick={() => setViewDetails(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Intern Details</h2>
              <button onClick={() => setViewDetails(null)} className="close-btn">×</button>
            </div>

            <div className="details-content">
              <div className="details-header">
                <div className="details-avatar-large">
                  {viewDetails.name.charAt(0)}
                </div>
                <div className="details-basic">
                  <h3 className="details-name">{viewDetails.name}</h3>
                  <p className="details-id">{viewDetails.internId}</p>
                  <span className={`status-badge ${getStatusColor(viewDetails.status)}`}>
                    {viewDetails.status}
                  </span>
                </div>
              </div>

              <div className="details-grid">
                <div className="details-section">
                  <h4 className="details-section-title">Personal Information</h4>
                  <div className="details-info-grid">
                    <div className="detail-item">
                      <FiMail size={18} />
                      <div>
                        <span className="detail-label">Email</span>
                        <span className="detail-value">{viewDetails.email}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiPhone size={18} />
                      <div>
                        <span className="detail-label">Phone</span>
                        <span className="detail-value">{viewDetails.phone}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiMapPin size={18} />
                      <div>
                        <span className="detail-label">Address</span>
                        <span className="detail-value">{viewDetails.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h4 className="details-section-title">Academic Information</h4>
                  <div className="details-info-grid">
                    <div className="detail-item">
                      <FiFileText size={18} />
                      <div>
                        <span className="detail-label">College</span>
                        <span className="detail-value">{viewDetails.college}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiFileText size={18} />
                      <div>
                        <span className="detail-label">Degree</span>
                        <span className="detail-value">{viewDetails.degree}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiFileText size={18} />
                      <div>
                        <span className="detail-label">Year</span>
                        <span className="detail-value">{viewDetails.year}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiFileText size={18} />
                      <div>
                        <span className="detail-label">CGPA</span>
                        <span className="detail-value">{viewDetails.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h4 className="details-section-title">Internship Details</h4>
                  <div className="details-info-grid">
                    <div className="detail-item">
                      <FiBriefcase size={18} />
                      <div>
                        <span className="detail-label">Department</span>
                        <span className="detail-value">{viewDetails.department}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiBriefcase size={18} />
                      <div>
                        <span className="detail-label">Domain</span>
                        <span className="detail-value">{viewDetails.domain}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiUser size={18} />
                      <div>
                        <span className="detail-label">Mentor</span>
                        <span className="detail-value">{viewDetails.mentor}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiTarget size={18} />
                      <div>
                        <span className="detail-label">Project</span>
                        <span className="detail-value">{viewDetails.project}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiCalendar size={18} />
                      <div>
                        <span className="detail-label">Duration</span>
                        <span className="detail-value">{viewDetails.duration}</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <FiCalendar size={18} />
                      <div>
                        <span className="detail-label">Start Date</span>
                        <span className="detail-value">
                          {new Date(viewDetails.startDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h4 className="details-section-title">Performance Metrics</h4>
                  <div className="performance-grid">
                    <div className="performance-item">
                      <div className="performance-circle" style={{background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'}}>
                        <span className="performance-value">{viewDetails.attendance}%</span>
                      </div>
                      <span className="performance-label">Attendance</span>
                    </div>
                    <div className="performance-item">
                      <div className="performance-circle" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                        <span className="performance-value">{viewDetails.tasksCompleted}</span>
                      </div>
                      <span className="performance-label">Tasks Completed</span>
                    </div>
                    <div className="performance-item">
                      <div className="performance-circle" style={{background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'}}>
                        <span className="performance-value">{viewDetails.reportsSubmitted}</span>
                      </div>
                      <span className="performance-label">Reports Submitted</span>
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h4 className="details-section-title">Uploaded Documents</h4>
                  <div className="documents-list">
                    {viewDetails.documents.resume && (
                      <div className="document-item">
                        <FiFileText size={20} />
                        <span>{viewDetails.documents.resume}</span>
                        <button className="download-btn">Download</button>
                      </div>
                    )}
                    {viewDetails.documents.offerLetter && (
                      <div className="document-item">
                        <FiFileText size={20} />
                        <span>{viewDetails.documents.offerLetter}</span>
                        <button className="download-btn">Download</button>
                      </div>
                    )}
                    {viewDetails.documents.idProof && (
                      <div className="document-item">
                        <FiFileText size={20} />
                        <span>{viewDetails.documents.idProof}</span>
                        <button className="download-btn">Download</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Task Modal - For Mentor */}
      {showTaskModal && (
        <div className="modal-overlay" onClick={closeTaskModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                Assign Task to {selectedInternForTask?.name}
              </h2>
              <button onClick={closeTaskModal} className="close-btn">×</button>
            </div>

            <form onSubmit={handleTaskSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Task Title *</label>
                <input
                  type="text"
                  required
                  value={taskFormData.title}
                  onChange={(e) => setTaskFormData({...taskFormData, title: e.target.value})}
                  className="form-input"
                  placeholder="Enter task title"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description *</label>
                <textarea
                  required
                  value={taskFormData.description}
                  onChange={(e) => setTaskFormData({...taskFormData, description: e.target.value})}
                  className="form-textarea"
                  placeholder="Enter task description"
                  rows={4}
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Priority *</label>
                  <select
                    required
                    value={taskFormData.priority}
                    onChange={(e) => setTaskFormData({...taskFormData, priority: e.target.value})}
                    className="form-input"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Deadline *</label>
                  <input
                    type="date"
                    required
                    value={taskFormData.deadline}
                    onChange={(e) => setTaskFormData({...taskFormData, deadline: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project</label>
                <input
                  type="text"
                  value={taskFormData.project}
                  readOnly
                  className="form-input"
                  placeholder="Project name"
                />
              </div>

              <div className="modal-footer">
                <button type="button" onClick={closeTaskModal} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Assign Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interns;