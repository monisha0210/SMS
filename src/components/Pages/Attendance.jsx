import React, { useState } from 'react';
import './Attendance.css';

const Attendance = ({ userRole }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      id: 1,
      internName: 'John Doe',
      date: '2025-11-05',
      checkIn: '09:00 AM',
      checkOut: '05:30 PM',
      workingHours: '8h 30m',
      status: 'Present',
      location: 'Office'
    },
    {
      id: 2,
      internName: 'Jane Smith',
      date: '2025-11-05',
      checkIn: '09:15 AM',
      checkOut: '05:45 PM',
      workingHours: '8h 30m',
      status: 'Present',
      location: 'Remote'
    },
    {
      id: 3,
      internName: 'Alex Brown',
      date: '2025-11-05',
      checkIn: '09:00 AM',
      checkOut: '05:00 PM',
      workingHours: '8h 00m',
      status: 'Present',
      location: 'Office'
    },
    {
      id: 4,
      internName: 'Mike Wilson',
      date: '2025-11-05',
      checkIn: '-',
      checkOut: '-',
      workingHours: '-',
      status: 'Absent',
      location: '-'
    },
    {
      id: 5,
      internName: 'Sarah Lee',
      date: '2025-11-05',
      checkIn: '09:30 AM',
      checkOut: '02:00 PM',
      workingHours: '4h 30m',
      status: 'Half Day',
      location: 'Office'
    }
  ]);

  const [leaveApplications, setLeaveApplications] = useState([
    {
      id: 1,
      internName: 'John Doe',
      leaveType: 'Sick Leave',
      fromDate: '2025-11-10',
      toDate: '2025-11-11',
      days: 2,
      reason: 'Fever and cold',
      appliedOn: '2025-11-04',
      status: 'Pending',
      documents: 'medical_certificate.pdf'
    },
    {
      id: 2,
      internName: 'Jane Smith',
      leaveType: 'Personal Leave',
      fromDate: '2025-11-15',
      toDate: '2025-11-15',
      days: 1,
      reason: 'Family function',
      appliedOn: '2025-11-03',
      status: 'Pending',
      documents: null
    },
    {
      id: 3,
      internName: 'Alex Brown',
      leaveType: 'Casual Leave',
      fromDate: '2025-11-08',
      toDate: '2025-11-09',
      days: 2,
      reason: 'Personal work',
      appliedOn: '2025-11-02',
      status: 'Approved',
      documents: null
    },
    {
      id: 4,
      internName: 'Mike Wilson',
      leaveType: 'Medical Leave',
      fromDate: '2025-11-05',
      toDate: '2025-11-05',
      days: 1,
      reason: 'Doctor appointment',
      appliedOn: '2025-11-04',
      status: 'Rejected',
      documents: null
    }
  ]);

  const [selectedDate, setSelectedDate] = useState('2025-11-05');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [leaveFilterStatus, setLeaveFilterStatus] = useState('Pending');
  const [activeTab, setActiveTab] = useState('attendance');
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);

  const handleApproveLeave = (leaveId) => {
    const updatedLeaves = leaveApplications.map(leave =>
      leave.id === leaveId ? { ...leave, status: 'Approved' } : leave
    );
    setLeaveApplications(updatedLeaves);
    setShowLeaveModal(false);
  };

  const handleRejectLeave = (leaveId) => {
    const updatedLeaves = leaveApplications.map(leave =>
      leave.id === leaveId ? { ...leave, status: 'Rejected' } : leave
    );
    setLeaveApplications(updatedLeaves);
    setShowLeaveModal(false);
  };

  const viewLeaveDetails = (leave) => {
    setSelectedLeave(leave);
    setShowLeaveModal(true);
  };

  const filteredAttendance = attendanceRecords.filter(record => {
    const matchesSearch = record.internName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const filteredLeaves = leaveApplications.filter(leave => {
    const matchesSearch = leave.internName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = leaveFilterStatus === 'All' || leave.status === leaveFilterStatus;
    return matchesSearch && matchesStatus;
  });

  const attendanceStats = {
    present: attendanceRecords.filter(r => r.status === 'Present').length,
    absent: attendanceRecords.filter(r => r.status === 'Absent').length,
    halfDay: attendanceRecords.filter(r => r.status === 'Half Day').length,
    late: attendanceRecords.filter(r => r.status === 'Late').length,
    pendingLeaves: leaveApplications.filter(l => l.status === 'Pending').length
  };

  return (
    <div className="attendance-page">
      {/* Page Header */}
      <div className="attendance-page-header">
        <div className="header-content-text">
          <h1 className="attendance-main-title">📅 Attendance Management</h1>
          <p className="attendance-main-subtitle">Monitor daily attendance and manage leave applications</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="attendance-content-wrapper">
        {/* Stats Cards */}
        <div className="attendance-stats-grid">
          <div className="attendance-stat-card stat-green">
            <div className="attendance-stat-icon">
              <span className="stat-emoji">✅</span>
            </div>
            <div className="attendance-stat-info">
              <p className="attendance-stat-label">Present Today</p>
              <h2 className="attendance-stat-value">{attendanceStats.present}</h2>
              <span className="attendance-stat-badge success">Active</span>
            </div>
          </div>

          <div className="attendance-stat-card stat-red">
            <div className="attendance-stat-icon">
              <span className="stat-emoji">❌</span>
            </div>
            <div className="attendance-stat-info">
              <p className="attendance-stat-label">Absent Today</p>
              <h2 className="attendance-stat-value">{attendanceStats.absent}</h2>
              <span className="attendance-stat-badge danger">Missing</span>
            </div>
          </div>

          <div className="attendance-stat-card stat-orange">
            <div className="attendance-stat-icon">
              <span className="stat-emoji">⏰</span>
            </div>
            <div className="attendance-stat-info">
              <p className="attendance-stat-label">Half Day</p>
              <h2 className="attendance-stat-value">{attendanceStats.halfDay}</h2>
              <span className="attendance-stat-badge warning">Partial</span>
            </div>
          </div>

          <div className="attendance-stat-card stat-purple">
            <div className="attendance-stat-icon">
              <span className="stat-emoji">📋</span>
            </div>
            <div className="attendance-stat-info">
              <p className="attendance-stat-label">Pending Leaves</p>
              <h2 className="attendance-stat-value">{attendanceStats.pendingLeaves}</h2>
              <span className="attendance-stat-badge info">Need Review</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="attendance-tabs">
          <button
            className={`attendance-tab ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            📊 Daily Attendance
          </button>
          <button
            className={`attendance-tab ${activeTab === 'leaves' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaves')}
          >
            📝 Leave Applications ({attendanceStats.pendingLeaves})
          </button>
        </div>

        {/* Attendance Tab Content */}
        {activeTab === 'attendance' && (
          <>
            {/* Filters Bar */}
            <div className="attendance-filters-bar">
              <div className="attendance-filters-group">
                <div className="attendance-date-picker">
                  <span className="date-icon">📅</span>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="date-input"
                  />
                </div>
                <div className="attendance-search-wrapper">
                  <span className="search-icon-att">🔍</span>
                  <input
                    type="text"
                    placeholder="Search by intern name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="attendance-search-input"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="attendance-filter-select"
                >
                  <option value="All">All Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Half Day">Half Day</option>
                  <option value="Late">Late</option>
                </select>
              </div>
              <button className="export-btn">
                <span className="export-icon">📥</span>
                Export Report
              </button>
            </div>

            {/* Attendance Table */}
            <div className="attendance-table-container">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Intern Name</th>
                    <th>Date</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Working Hours</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendance.map(record => (
                    <tr key={record.id}>
                      <td>
                        <div className="intern-name-cell">
                          <div className="intern-avatar-small">{record.internName.charAt(0)}</div>
                          <span className="intern-name-text">{record.internName}</span>
                        </div>
                      </td>
                      <td className="date-cell">{record.date}</td>
                      <td className="time-cell">{record.checkIn}</td>
                      <td className="time-cell">{record.checkOut}</td>
                      <td className="hours-cell">{record.workingHours}</td>
                      <td>
                        <span className={`location-badge ${record.location.toLowerCase()}`}>
                          {record.location}
                        </span>
                      </td>
                      <td>
                        <span className={`attendance-status-badge status-${record.status.toLowerCase().replace(' ', '-')}`}>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Leave Applications Tab Content */}
        {activeTab === 'leaves' && (
          <>
            {/* Leave Filters */}
            <div className="attendance-filters-bar">
              <div className="attendance-filters-group">
                <div className="attendance-search-wrapper">
                  <span className="search-icon-att">🔍</span>
                  <input
                    type="text"
                    placeholder="Search by intern name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="attendance-search-input"
                  />
                </div>
                <select
                  value={leaveFilterStatus}
                  onChange={(e) => setLeaveFilterStatus(e.target.value)}
                  className="attendance-filter-select"
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Leave Applications Grid */}
            <div className="leave-applications-grid">
              {filteredLeaves.map(leave => (
                <div key={leave.id} className="leave-application-card">
                  <div className="leave-card-header">
                    <div className="leave-intern-info">
                      <div className="leave-intern-avatar">{leave.internName.charAt(0)}</div>
                      <div>
                        <h3 className="leave-intern-name">{leave.internName}</h3>
                        <p className="leave-type-text">{leave.leaveType}</p>
                      </div>
                    </div>
                    <span className={`leave-status-badge status-${leave.status.toLowerCase()}`}>
                      {leave.status}
                    </span>
                  </div>

                  <div className="leave-card-body">
                    <div className="leave-info-row">
                      <span className="leave-info-label">📅 Duration:</span>
                      <span className="leave-info-value">{leave.fromDate} to {leave.toDate} ({leave.days} {leave.days === 1 ? 'day' : 'days'})</span>
                    </div>
                    <div className="leave-info-row">
                      <span className="leave-info-label">📝 Reason:</span>
                      <span className="leave-info-value">{leave.reason}</span>
                    </div>
                    <div className="leave-info-row">
                      <span className="leave-info-label">🕐 Applied On:</span>
                      <span className="leave-info-value">{leave.appliedOn}</span>
                    </div>
                    {leave.documents && (
                      <div className="leave-info-row">
                        <span className="leave-info-label">📎 Documents:</span>
                        <a href="#" className="document-link">{leave.documents}</a>
                      </div>
                    )}
                  </div>

                  <div className="leave-card-footer">
                    <button
                      className="leave-action-btn btn-view-details"
                      onClick={() => viewLeaveDetails(leave)}
                    >
                      👁️ View Details
                    </button>
                    {leave.status === 'Pending' && (
                      <>
                        <button
                          className="leave-action-btn btn-approve"
                          onClick={() => handleApproveLeave(leave.id)}
                        >
                          ✅ Approve
                        </button>
                        <button
                          className="leave-action-btn btn-reject"
                          onClick={() => handleRejectLeave(leave.id)}
                        >
                          ❌ Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Leave Details Modal */}
      {showLeaveModal && selectedLeave && (
        <div className="attendance-modal-overlay" onClick={() => setShowLeaveModal(false)}>
          <div className="attendance-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="attendance-modal-header">
              <h2 className="attendance-modal-title">📋 Leave Application Details</h2>
              <button className="attendance-modal-close" onClick={() => setShowLeaveModal(false)}>✕</button>
            </div>
            <div className="attendance-modal-body">
              <div className="leave-detail-section">
                <div className="leave-detail-header">
                  <div className="leave-detail-avatar">{selectedLeave.internName.charAt(0)}</div>
                  <div>
                    <h3 className="leave-detail-name">{selectedLeave.internName}</h3>
                    <p className="leave-detail-type">{selectedLeave.leaveType}</p>
                  </div>
                  <span className={`leave-status-badge status-${selectedLeave.status.toLowerCase()}`}>
                    {selectedLeave.status}
                  </span>
                </div>

                <div className="leave-details-grid">
                  <div className="leave-detail-item">
                    <span className="detail-label-leave">📅 From Date:</span>
                    <span className="detail-value-leave">{selectedLeave.fromDate}</span>
                  </div>
                  <div className="leave-detail-item">
                    <span className="detail-label-leave">📅 To Date:</span>
                    <span className="detail-value-leave">{selectedLeave.toDate}</span>
                  </div>
                  <div className="leave-detail-item">
                    <span className="detail-label-leave">📊 Total Days:</span>
                    <span className="detail-value-leave">{selectedLeave.days} {selectedLeave.days === 1 ? 'day' : 'days'}</span>
                  </div>
                  <div className="leave-detail-item">
                    <span className="detail-label-leave">🕐 Applied On:</span>
                    <span className="detail-value-leave">{selectedLeave.appliedOn}</span>
                  </div>
                  <div className="leave-detail-item full-width">
                    <span className="detail-label-leave">📝 Reason:</span>
                    <span className="detail-value-leave">{selectedLeave.reason}</span>
                  </div>
                  {selectedLeave.documents && (
                    <div className="leave-detail-item full-width">
                      <span className="detail-label-leave">📎 Attached Documents:</span>
                      <a href="#" className="document-link-modal">{selectedLeave.documents}</a>
                    </div>
                  )}
                </div>
              </div>

              {selectedLeave.status === 'Pending' && (
                <div className="attendance-modal-actions">
                  <button
                    className="modal-action-btn btn-approve-modal"
                    onClick={() => handleApproveLeave(selectedLeave.id)}
                  >
                    ✅ Approve Leave
                  </button>
                  <button
                    className="modal-action-btn btn-reject-modal"
                    onClick={() => handleRejectLeave(selectedLeave.id)}
                  >
                    ❌ Reject Leave
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;