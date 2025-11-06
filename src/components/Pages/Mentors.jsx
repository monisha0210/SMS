import React, { useState } from 'react';
import './Mentors.css';

const Mentors = () => {
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      phone: '+1 234-567-8900',
      department: 'Engineering',
      specialization: 'Web Development',
      experience: '8 years',
      status: 'Active',
      assignedInterns: 5,
      completedProjects: 12,
      activeProjects: 2,
      rating: 4.8,
      joinDate: '2023-01-15'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      phone: '+1 234-567-8901',
      department: 'Data Science',
      specialization: 'Machine Learning',
      experience: '6 years',
      status: 'Active',
      assignedInterns: 3,
      completedProjects: 8,
      activeProjects: 1,
      rating: 4.6,
      joinDate: '2023-03-20'
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      phone: '+1 234-567-8902',
      department: 'Design',
      specialization: 'UI/UX Design',
      experience: '5 years',
      status: 'Active',
      assignedInterns: 4,
      completedProjects: 10,
      activeProjects: 2,
      rating: 4.9,
      joinDate: '2023-02-10'
    },
    {
      id: 4,
      name: 'Robert Lee',
      email: 'robert.lee@company.com',
      phone: '+1 234-567-8903',
      department: 'Engineering',
      specialization: 'Mobile Development',
      experience: '7 years',
      status: 'Active',
      assignedInterns: 2,
      completedProjects: 15,
      activeProjects: 1,
      rating: 4.7,
      joinDate: '2022-11-05'
    }
  ]);

  const [interns, setInterns] = useState([
    { id: 1, name: 'John Doe', domain: 'Web Development', mentor: null },
    { id: 2, name: 'Jane Smith', domain: 'Data Science', mentor: null },
    { id: 3, name: 'Alex Brown', domain: 'UI/UX Design', mentor: null },
    { id: 4, name: 'Mike Wilson', domain: 'Mobile Development', mentor: null },
    { id: 5, name: 'Sarah Lee', domain: 'Web Development', mentor: null }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    specialization: '',
    experience: '',
    status: 'Active'
  });

  const departments = ['All', 'Engineering', 'Data Science', 'Design', 'Marketing', 'Operations'];
  const specializations = [
    'Web Development',
    'Mobile Development',
    'Machine Learning',
    'Data Analysis',
    'UI/UX Design',
    'DevOps',
    'Cloud Computing'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddMentor = (e) => {
    e.preventDefault();
    const newMentor = {
      id: mentors.length + 1,
      ...formData,
      assignedInterns: 0,
      completedProjects: 0,
      activeProjects: 0,
      rating: 0,
      joinDate: new Date().toISOString().split('T')[0]
    };
    setMentors([...mentors, newMentor]);
    setShowAddModal(false);
    resetForm();
  };

  const handleViewMentor = (mentor) => {
    setSelectedMentor(mentor);
    setShowViewModal(true);
  };

  const handleEditMentor = (mentor) => {
    setSelectedMentor(mentor);
    setFormData({
      name: mentor.name,
      email: mentor.email,
      phone: mentor.phone,
      department: mentor.department,
      specialization: mentor.specialization,
      experience: mentor.experience,
      status: mentor.status
    });
    setShowEditModal(true);
  };

  const handleUpdateMentor = (e) => {
    e.preventDefault();
    const updatedMentors = mentors.map(mentor =>
      mentor.id === selectedMentor.id ? { ...mentor, ...formData } : mentor
    );
    setMentors(updatedMentors);
    setShowEditModal(false);
    resetForm();
  };

  const handleDeactivateMentor = (id) => {
    if (window.confirm('Are you sure you want to deactivate this mentor?')) {
      const updatedMentors = mentors.map(mentor =>
        mentor.id === id ? { ...mentor, status: 'Inactive' } : mentor
      );
      setMentors(updatedMentors);
    }
  };

  const handleAssignInterns = (mentor) => {
    setSelectedMentor(mentor);
    setShowAssignModal(true);
  };

  const handleInternAssignment = (internId) => {
    const updatedInterns = interns.map(intern =>
      intern.id === internId ? { ...intern, mentor: selectedMentor.name } : intern
    );
    setInterns(updatedInterns);
    
    const updatedMentors = mentors.map(mentor =>
      mentor.id === selectedMentor.id 
        ? { ...mentor, assignedInterns: mentor.assignedInterns + 1 }
        : mentor
    );
    setMentors(updatedMentors);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      specialization: '',
      experience: '',
      status: 'Active'
    });
    setSelectedMentor(null);
  };

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || mentor.department === filterDepartment;
    const matchesStatus = filterStatus === 'All' || mentor.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="mentors-page">
      {/* Page Header */}
      <div className="mentors-page-header">
        <div className="header-text-content">
          <h1 className="main-page-title">Mentors Management</h1>
          <p className="main-page-subtitle">View and manage mentor profiles</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mentors-content-wrapper">
        {/* Stats Cards */}
        <div className="mentors-stats-grid">
          <div className="mentor-stat-card stat-blue">
            <div className="stat-icon-box">
              <span className="stat-emoji">👨‍🏫</span>
            </div>
            <div className="stat-info">
              <p className="stat-label-text">Total Mentors</p>
              <h2 className="stat-value-text">{mentors.length}</h2>
              <span className="stat-badge-small positive">Available</span>
            </div>
          </div>

          <div className="mentor-stat-card stat-green">
            <div className="stat-icon-box">
              <span className="stat-emoji">✅</span>
            </div>
            <div className="stat-info">
              <p className="stat-label-text">Active Mentors</p>
              <h2 className="stat-value-text">{mentors.filter(m => m.status === 'Active').length}</h2>
              <span className="stat-badge-small success">Currently active</span>
            </div>
          </div>

          <div className="mentor-stat-card stat-orange">
            <div className="stat-icon-box">
              <span className="stat-emoji">👥</span>
            </div>
            <div className="stat-info">
              <p className="stat-label-text">Total Interns Assigned</p>
              <h2 className="stat-value-text">{mentors.reduce((sum, m) => sum + m.assignedInterns, 0)}</h2>
              <span className="stat-badge-small neutral">Under guidance</span>
            </div>
          </div>

          <div className="mentor-stat-card stat-purple">
            <div className="stat-icon-box">
              <span className="stat-emoji">🎯</span>
            </div>
            <div className="stat-info">
              <p className="stat-label-text">Active Projects</p>
              <h2 className="stat-value-text">{mentors.reduce((sum, m) => sum + m.activeProjects, 0)}</h2>
              <span className="stat-badge-small warning">In progress</span>
            </div>
          </div>
        </div>

        {/* Filters and Add Button */}
        <div className="mentors-filters-bar">
          <div className="filters-search-group">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mentor-search-input"
              />
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="mentor-filter-select"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'All' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="mentor-filter-select"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button className="add-mentor-button" onClick={() => setShowAddModal(true)}>
            <span className="add-icon">➕</span>
            Add New Mentor
          </button>
        </div>

        {/* Mentors Grid */}
        <div className="mentors-cards-grid">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="mentor-profile-card">
              <div className="mentor-card-header">
                <div className="mentor-avatar-large">{mentor.name.charAt(0)}</div>
                <span className={`mentor-status-badge status-${mentor.status.toLowerCase()}`}>
                  {mentor.status}
                </span>
              </div>
              
              <div className="mentor-card-body">
                <h3 className="mentor-card-name">{mentor.name}</h3>
                <p className="mentor-card-email">{mentor.email}</p>
                <div className="mentor-info-tags">
                  <span className="info-tag-item">
                    <span className="tag-icon">🏢</span>
                    {mentor.department}
                  </span>
                  <span className="info-tag-item">
                    <span className="tag-icon">💼</span>
                    {mentor.specialization}
                  </span>
                </div>

                <div className="mentor-stats-row">
                  <div className="stat-mini-item">
                    <span className="stat-mini-value">{mentor.assignedInterns}</span>
                    <span className="stat-mini-label">Interns</span>
                  </div>
                  <div className="stat-mini-item">
                    <span className="stat-mini-value">{mentor.activeProjects}</span>
                    <span className="stat-mini-label">Projects</span>
                  </div>
                  <div className="stat-mini-item">
                    <span className="stat-mini-value">⭐ {mentor.rating}</span>
                    <span className="stat-mini-label">Rating</span>
                  </div>
                </div>
              </div>

              <div className="mentor-card-footer">
                <button 
                  className="mentor-action-btn btn-view"
                  onClick={() => handleViewMentor(mentor)}
                >
                  👁️ View
                </button>
                <button 
                  className="mentor-action-btn btn-assign"
                  onClick={() => handleAssignInterns(mentor)}
                >
                  👥 Assign
                </button>
                <button 
                  className="mentor-action-btn btn-edit"
                  onClick={() => handleEditMentor(mentor)}
                >
                  ✏️ Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Mentor Modal */}
      {showAddModal && (
        <div className="mentor-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="mentor-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mentor-modal-header">
              <h2 className="mentor-modal-title">➕ Add New Mentor</h2>
              <button className="mentor-modal-close" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAddMentor} className="mentor-form">
              <div className="mentor-form-grid">
                <div className="mentor-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter full name"
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="email@company.com"
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 234-567-8900"
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Department *</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.filter(d => d !== 'All').map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="mentor-form-group">
                  <label>Specialization *</label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Specialization</option>
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div className="mentor-form-group">
                  <label>Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 5 years"
                  />
                </div>
              </div>
              <div className="mentor-modal-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Add Mentor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Mentor Modal */}
      {showViewModal && selectedMentor && (
        <div className="mentor-modal-overlay" onClick={() => setShowViewModal(false)}>
          <div className="mentor-modal-content mentor-modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="mentor-modal-header">
              <h2 className="mentor-modal-title">👨‍🏫 Mentor Profile</h2>
              <button className="mentor-modal-close" onClick={() => setShowViewModal(false)}>✕</button>
            </div>
            <div className="mentor-view-content">
              <div className="mentor-profile-section">
                <div className="mentor-profile-avatar-xl">{selectedMentor.name.charAt(0)}</div>
                <div className="mentor-profile-info">
                  <h3 className="mentor-profile-name">{selectedMentor.name}</h3>
                  <p className="mentor-profile-email">{selectedMentor.email}</p>
                  <span className={`mentor-status-badge status-${selectedMentor.status.toLowerCase()}`}>
                    {selectedMentor.status}
                  </span>
                </div>
              </div>

              <div className="mentor-details-grid">
                <div className="mentor-detail-item">
                  <span className="detail-label">📞 Phone:</span>
                  <span className="detail-value">{selectedMentor.phone}</span>
                </div>
                <div className="mentor-detail-item">
                  <span className="detail-label">🏢 Department:</span>
                  <span className="detail-value">{selectedMentor.department}</span>
                </div>
                <div className="mentor-detail-item">
                  <span className="detail-label">💼 Specialization:</span>
                  <span className="detail-value">{selectedMentor.specialization}</span>
                </div>
                <div className="mentor-detail-item">
                  <span className="detail-label">📅 Experience:</span>
                  <span className="detail-value">{selectedMentor.experience}</span>
                </div>
                <div className="mentor-detail-item">
                  <span className="detail-label">📅 Join Date:</span>
                  <span className="detail-value">{selectedMentor.joinDate}</span>
                </div>
                <div className="mentor-detail-item">
                  <span className="detail-label">⭐ Rating:</span>
                  <span className="detail-value">{selectedMentor.rating}/5.0</span>
                </div>
              </div>

              <div className="mentor-performance-section">
                <h4 className="section-heading">📊 Performance Metrics</h4>
                <div className="performance-grid">
                  <div className="performance-card">
                    <div className="perf-number">{selectedMentor.assignedInterns}</div>
                    <div className="perf-label">Assigned Interns</div>
                  </div>
                  <div className="performance-card">
                    <div className="perf-number">{selectedMentor.activeProjects}</div>
                    <div className="perf-label">Active Projects</div>
                  </div>
                  <div className="performance-card">
                    <div className="perf-number">{selectedMentor.completedProjects}</div>
                    <div className="perf-label">Completed Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Mentor Modal */}
      {showEditModal && selectedMentor && (
        <div className="mentor-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="mentor-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mentor-modal-header">
              <h2 className="mentor-modal-title">✏️ Edit Mentor</h2>
              <button className="mentor-modal-close" onClick={() => setShowEditModal(false)}>✕</button>
            </div>
            <form onSubmit={handleUpdateMentor} className="mentor-form">
              <div className="mentor-form-grid">
                <div className="mentor-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mentor-form-group">
                  <label>Department *</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    {departments.filter(d => d !== 'All').map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="mentor-form-group">
                  <label>Specialization *</label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    required
                  >
                    {specializations.map(spec => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
                <div className="mentor-form-group">
                  <label>Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="mentor-modal-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Update Mentor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assign Interns Modal */}
      {showAssignModal && selectedMentor && (
        <div className="mentor-modal-overlay" onClick={() => setShowAssignModal(false)}>
          <div className="mentor-modal-content mentor-modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="mentor-modal-header">
              <h2 className="mentor-modal-title">👥 Assign Interns to {selectedMentor.name}</h2>
              <button className="mentor-modal-close" onClick={() => setShowAssignModal(false)}>✕</button>
            </div>
            <div className="assign-modal-content">
              <p className="assign-info-text">Select interns to assign to this mentor based on domain match:</p>
              <div className="interns-assign-list">
                {interns.filter(intern => !intern.mentor).map(intern => (
                  <div key={intern.id} className="intern-assign-item">
                    <div className="intern-assign-info">
                      <div className="intern-assign-avatar">{intern.name.charAt(0)}</div>
                      <div>
                        <p className="intern-assign-name">{intern.name}</p>
                        <p className="intern-assign-domain">{intern.domain}</p>
                      </div>
                    </div>
                    <button
                      className="btn-assign-intern"
                      onClick={() => handleInternAssignment(intern.id)}
                    >
                      Assign
                    </button>
                  </div>
                ))}
                {interns.filter(intern => !intern.mentor).length === 0 && (
                  <p className="no-interns-text">No unassigned interns available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;