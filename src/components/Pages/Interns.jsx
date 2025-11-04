import React, { useState } from 'react';
import './Interns.css';

const Interns = ({ userRole }) => {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234-567-8900',
      domain: 'Web Development',
      mentor: 'Sarah Wilson',
      startDate: '2025-09-01',
      endDate: '2025-12-01',
      status: 'Active',
      attendance: 92,
      tasksCompleted: 15,
      totalTasks: 20,
      college: 'MIT',
      degree: 'B.Tech CSE',
      year: '4th Year',
      address: '123 Main St, Boston, MA',
      emergencyContact: '+1 234-567-8901',
      documents: {
        resume: 'john_resume.pdf',
        offerLetter: 'john_offer.pdf',
        idProof: 'john_id.pdf'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 234-567-8902',
      domain: 'Data Science',
      mentor: 'Mike Johnson',
      startDate: '2025-09-15',
      endDate: '2025-12-15',
      status: 'Active',
      attendance: 88,
      tasksCompleted: 12,
      totalTasks: 18,
      college: 'Stanford University',
      degree: 'M.Sc Data Science',
      year: '2nd Year',
      address: '456 Oak Ave, Stanford, CA',
      emergencyContact: '+1 234-567-8903',
      documents: {
        resume: 'jane_resume.pdf',
        offerLetter: 'jane_offer.pdf',
        idProof: 'jane_id.pdf'
      }
    },
    {
      id: 3,
      name: 'Alex Brown',
      email: 'alex.brown@example.com',
      phone: '+1 234-567-8904',
      domain: 'UI/UX Design',
      mentor: 'Sarah Wilson',
      startDate: '2025-08-20',
      endDate: '2025-11-20',
      status: 'Active',
      attendance: 95,
      tasksCompleted: 18,
      totalTasks: 20,
      college: 'Design Institute',
      degree: 'B.Des',
      year: '3rd Year',
      address: '789 Design Ln, NY',
      emergencyContact: '+1 234-567-8905',
      documents: {
        resume: 'alex_resume.pdf',
        offerLetter: 'alex_offer.pdf',
        idProof: 'alex_id.pdf'
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDomain, setFilterDomain] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    mentor: '',
    startDate: '',
    endDate: '',
    college: '',
    degree: '',
    year: '',
    address: '',
    emergencyContact: '',
    status: 'Active'
  });

  const domains = ['All', 'Web Development', 'Data Science', 'UI/UX Design', 'Mobile Development', 'DevOps', 'Machine Learning'];
  const mentors = ['Sarah Wilson', 'Mike Johnson', 'Emily Davis', 'Robert Lee', 'Chris Martin'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddIntern = (e) => {
    e.preventDefault();
    const newIntern = {
      id: interns.length + 1,
      ...formData,
      attendance: 0,
      tasksCompleted: 0,
      totalTasks: 0,
      documents: {
        resume: 'pending_upload.pdf',
        offerLetter: 'pending_upload.pdf',
        idProof: 'pending_upload.pdf'
      }
    };
    setInterns([...interns, newIntern]);
    setShowAddModal(false);
    resetForm();
  };

  const handleViewIntern = (intern) => {
    setSelectedIntern(intern);
    setShowViewModal(true);
  };

  const handleEditIntern = (intern) => {
    setSelectedIntern(intern);
    setFormData({
      name: intern.name,
      email: intern.email,
      phone: intern.phone,
      domain: intern.domain,
      mentor: intern.mentor,
      startDate: intern.startDate,
      endDate: intern.endDate,
      college: intern.college,
      degree: intern.degree,
      year: intern.year,
      address: intern.address,
      emergencyContact: intern.emergencyContact,
      status: intern.status
    });
    setShowEditModal(true);
  };

  const handleUpdateIntern = (e) => {
    e.preventDefault();
    const updatedInterns = interns.map(intern =>
      intern.id === selectedIntern.id ? { ...intern, ...formData } : intern
    );
    setInterns(updatedInterns);
    setShowEditModal(false);
    resetForm();
  };

  const handleDeleteIntern = (id) => {
    if (window.confirm('Are you sure you want to delete this intern?')) {
      setInterns(interns.filter(intern => intern.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      domain: '',
      mentor: '',
      startDate: '',
      endDate: '',
      college: '',
      degree: '',
      year: '',
      address: '',
      emergencyContact: '',
      status: 'Active'
    });
    setSelectedIntern(null);
  };

  const filteredInterns = interns.filter(intern => {
    const matchesSearch = intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         intern.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || intern.status === filterStatus;
    const matchesDomain = filterDomain === 'All' || intern.domain === filterDomain;
    return matchesSearch && matchesStatus && matchesDomain;
  });

  return (
    <div className="interns-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-main-title">📋 Tasks Management</h1>
          <p className="page-main-subtitle">View and manage tasks</p>
          <p className="viewing-as">Viewing as: <span className="user-role">{userRole}</span></p>
        </div>
      </div>

      {/* Content Container */}
      <div className="content-wrapper">
        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card stat-blue">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">👥</span>
            </div>
            <div className="stat-details">
              <p className="stat-title">Total Interns</p>
              <h2 className="stat-number">{interns.length}</h2>
              <span className="stat-change positive">+3 this week</span>
            </div>
          </div>

          <div className="stat-card stat-green">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">✅</span>
            </div>
            <div className="stat-details">
              <p className="stat-title">Active</p>
              <h2 className="stat-number">{interns.filter(i => i.status === 'Active').length}</h2>
              <span className="stat-change neutral">Currently active</span>
            </div>
          </div>

          <div className="stat-card stat-orange">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">⏸️</span>
            </div>
            <div className="stat-details">
              <p className="stat-title">On Leave</p>
              <h2 className="stat-number">{interns.filter(i => i.status === 'On Leave').length}</h2>
              <span className="stat-change warning">Temporary</span>
            </div>
          </div>

          <div className="stat-card stat-purple">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">🎓</span>
            </div>
            <div className="stat-details">
              <p className="stat-title">Completed</p>
              <h2 className="stat-number">{interns.filter(i => i.status === 'Completed').length}</h2>
              <span className="stat-change success">Graduated</span>
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="filters-actions-bar">
          <div className="search-filter-group">
            <div className="search-wrapper">
              <span className="search-icon-left">🔍</span>
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-field"
              />
            </div>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-dropdown"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
              <option value="Completed">Completed</option>
            </select>
            <select 
              value={filterDomain} 
              onChange={(e) => setFilterDomain(e.target.value)}
              className="filter-dropdown"
            >
              {domains.map(domain => (
                <option key={domain} value={domain}>
                  {domain === 'All' ? 'All Domains' : domain}
                </option>
              ))}
            </select>
          </div>
          {userRole === 'hr' && (
            <button className="add-intern-btn" onClick={() => setShowAddModal(true)}>
              <span className="btn-icon-add">➕</span>
              Add New Intern
            </button>
          )}
        </div>

        {/* Interns Table */}
        <div className="table-container">
          <table className="interns-table">
            <thead>
              <tr>
                <th>Intern Details</th>
                <th>Domain</th>
                <th>Mentor</th>
                <th>Duration</th>
                <th>Attendance</th>
                <th>Progress</th>
                <th>Status</th>
                {userRole === 'hr' && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredInterns.map(intern => (
                <tr key={intern.id}>
                  <td>
                    <div className="intern-profile">
                      <div className="intern-avatar-circle">{intern.name.charAt(0)}</div>
                      <div className="intern-text-info">
                        <p className="intern-fullname">{intern.name}</p>
                        <p className="intern-email-text">{intern.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="domain-tag">{intern.domain}</span>
                  </td>
                  <td className="mentor-name">{intern.mentor}</td>
                  <td>
                    <div className="date-range">
                      <p className="date-line">{intern.startDate}</p>
                      <p className="date-line">to {intern.endDate}</p>
                    </div>
                  </td>
                  <td>
                    <span className={`attendance-tag ${
                      intern.attendance >= 90 ? 'high' : 
                      intern.attendance >= 75 ? 'medium' : 'low'
                    }`}>
                      {intern.attendance}%
                    </span>
                  </td>
                  <td>
                    <div className="progress-section">
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-bar-fill" 
                          style={{ width: `${(intern.tasksCompleted / intern.totalTasks) * 100}%` }}
                        ></div>
                      </div>
                      <span className="progress-label">{intern.tasksCompleted}/{intern.totalTasks}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-tag status-${intern.status.toLowerCase().replace(' ', '-')}`}>
                      {intern.status}
                    </span>
                  </td>
                  {userRole === 'hr' && (
                    <td>
                      <div className="action-btns-group">
                        <button 
                          className="action-btn-icon btn-view" 
                          onClick={() => handleViewIntern(intern)}
                          title="View Details"
                        >
                          👁️
                        </button>
                        <button 
                          className="action-btn-icon btn-edit" 
                          onClick={() => handleEditIntern(intern)}
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button 
                          className="action-btn-icon btn-delete" 
                          onClick={() => handleDeleteIntern(intern.id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h2 className="modal-heading">➕ Add New Intern</h2>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAddIntern} className="modal-form">
              <div className="form-sections">
                <div className="form-section-group">
                  <h3 className="section-label">Personal Information</h3>
                  <div className="form-row-grid">
                    <div className="input-field-group">
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
                    <div className="input-field-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="input-field-group">
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
                    <div className="input-field-group">
                      <label>Emergency Contact *</label>
                      <input
                        type="tel"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                        placeholder="+1 234-567-8900"
                      />
                    </div>
                  </div>
                  <div className="input-field-group full-width">
                    <label>Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter complete address"
                      rows="2"
                    />
                  </div>
                </div>

                <div className="form-section-group">
                  <h3 className="section-label">Academic Information</h3>
                  <div className="form-row-grid">
                    <div className="input-field-group">
                      <label>College/University *</label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter college name"
                      />
                    </div>
                    <div className="input-field-group">
                      <label>Degree *</label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., B.Tech CSE"
                      />
                    </div>
                    <div className="input-field-group">
                      <label>Year *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Final Year">Final Year</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section-group">
                  <h3 className="section-label">Internship Details</h3>
                  <div className="form-row-grid">
                    <div className="input-field-group">
                      <label>Domain *</label>
                      <select
                        name="domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Domain</option>
                        {domains.filter(d => d !== 'All').map(domain => (
                          <option key={domain} value={domain}>{domain}</option>
                        ))}
                      </select>
                    </div>
                    <div className="input-field-group">
                      <label>Assign Mentor *</label>
                      <select
                        name="mentor"
                        value={formData.mentor}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Mentor</option>
                        {mentors.map(mentor => (
                          <option key={mentor} value={mentor}>{mentor}</option>
                        ))}
                      </select>
                    </div>
                    <div className="input-field-group">
                      <label>Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="input-field-group">
                      <label>End Date *</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section-group">
                  <h3 className="section-label">📎 Upload Documents</h3>
                  <div className="upload-files-grid">
                    <div className="file-upload-box">
                      <input type="file" id="resume-upload" accept=".pdf,.doc,.docx" />
                      <label htmlFor="resume-upload">
                        <span className="upload-emoji">📄</span>
                        <p className="upload-text">Resume / CV</p>
                        <span className="upload-hint">PDF, DOC, DOCX</span>
                      </label>
                    </div>
                    <div className="file-upload-box">
                      <input type="file" id="offer-upload" accept=".pdf" />
                      <label htmlFor="offer-upload">
                        <span className="upload-emoji">📋</span>
                        <p className="upload-text">Offer Letter</p>
                        <span className="upload-hint">PDF only</span>
                      </label>
                    </div>
                    <div className="file-upload-box">
                      <input type="file" id="id-upload" accept=".pdf,.jpg,.png" />
                      <label htmlFor="id-upload">
                        <span className="upload-emoji">🆔</span>
                        <p className="upload-text">ID Proof</p>
                        <span className="upload-hint">PDF, JPG, PNG</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer-actions">
                <button type="button" className="btn-secondary-modal" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-modal">
                  Add Intern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && selectedIntern && (
        <div className="modal-backdrop" onClick={() => setShowViewModal(false)}>
          <div className="modal-box modal-view-size" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h2 className="modal-heading">👤 Intern Profile</h2>
              <button className="modal-close-btn" onClick={() => setShowViewModal(false)}>✕</button>
            </div>
            <div className="view-modal-content">
              <div className="profile-header-section">
                <div className="profile-avatar-large">{selectedIntern.name.charAt(0)}</div>
                <div className="profile-main-info">
                  <h3 className="profile-name">{selectedIntern.name}</h3>
                  <p className="profile-email">{selectedIntern.email}</p>
                  <span className={`status-tag status-${selectedIntern.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedIntern.status}
                  </span>
                </div>
              </div>

              <div className="details-grid-layout">
                <div className="detail-row">
                  <span className="detail-key">📞 Phone:</span>
                  <span className="detail-val">{selectedIntern.phone}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">🚨 Emergency:</span>
                  <span className="detail-val">{selectedIntern.emergencyContact}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">💼 Domain:</span>
                  <span className="detail-val">{selectedIntern.domain}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">👨‍🏫 Mentor:</span>
                  <span className="detail-val">{selectedIntern.mentor}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">🎓 College:</span>
                  <span className="detail-val">{selectedIntern.college}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📚 Degree:</span>
                  <span className="detail-val">{selectedIntern.degree}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📅 Year:</span>
                  <span className="detail-val">{selectedIntern.year}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📍 Address:</span>
                  <span className="detail-val">{selectedIntern.address}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📅 Start Date:</span>
                  <span className="detail-val">{selectedIntern.startDate}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📅 End Date:</span>
                  <span className="detail-val">{selectedIntern.endDate}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">📊 Attendance:</span>
                  <span className="detail-val">{selectedIntern.attendance}%</span>
                </div>
                <div className="detail-row">
                  <span className="detail-key">✅ Tasks:</span>
                  <span className="detail-val">{selectedIntern.tasksCompleted}/{selectedIntern.totalTasks}</span>
                </div>
              </div>

              <div className="documents-view-section">
                <h4 className="docs-heading">📎 Uploaded Documents</h4>
                <div className="docs-list-view">
                  <div className="doc-item-row">
                    <span className="doc-icon">📄</span>
                    <span className="doc-name">Resume:</span>
                    <a href="#" className="doc-download-link">{selectedIntern.documents.resume}</a>
                  </div>
                  <div className="doc-item-row">
                    <span className="doc-icon">📋</span>
                    <span className="doc-name">Offer Letter:</span>
                    <a href="#" className="doc-download-link">{selectedIntern.documents.offerLetter}</a>
                  </div>
                  <div className="doc-item-row">
                    <span className="doc-icon">🆔</span>
                    <span className="doc-name">ID Proof:</span>
                    <a href="#" className="doc-download-link">{selectedIntern.documents.idProof}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedIntern && (
        <div className="modal-backdrop" onClick={() => setShowEditModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h2 className="modal-heading">✏️ Edit Intern</h2>
              <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>✕</button>
            </div>
            <form onSubmit={handleUpdateIntern} className="modal-form">
              <div className="form-row-grid">
                <div className="input-field-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-field-group">
                  <label>Domain *</label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    required
                  >
                    {domains.filter(d => d !== 'All').map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>
                <div className="input-field-group">
                  <label>Mentor *</label>
                  <select
                    name="mentor"
                    value={formData.mentor}
                    onChange={handleInputChange}
                    required
                  >
                    {mentors.map(mentor => (
                      <option key={mentor} value={mentor}>{mentor}</option>
                    ))}
                  </select>
                </div>
                <div className="input-field-group">
                  <label>Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer-actions">
                <button type="button" className="btn-secondary-modal" onClick={() => setShowEditModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-modal">
                  Update Intern
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