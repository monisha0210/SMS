import React, { useState } from "react";
import "./Reports.css";

const Reports = ({ userRole }) => {
  const [reports, setReports] = useState([
    {
      internName: "Anitha R",
      project: "AI Attendance Tracker",
      status: "Pending Approval",
      submissionDate: "2025-10-29",
      evaluation: "",
      certificateGenerated: false,
    },
    {
      internName: "Rohit S",
      project: "Web-Based Learning Portal",
      status: "Approved",
      submissionDate: "2025-10-30",
      evaluation: "Excellent performance and timely submission.",
      certificateGenerated: true,
    },
  ]);

  const handleApprove = (index) => {
    const updated = [...reports];
    updated[index].status = "Approved";
    setReports(updated);
  };

  const handleGenerateCertificate = (index) => {
    const updated = [...reports];
    updated[index].certificateGenerated = true;
    setReports(updated);
    alert(`Certificate generated for ${updated[index].internName}`);
  };

  const handleExport = () => {
    alert("Performance summary exported successfully!");
  };

  return (
    <div className="reports-container">
      <h1 className="page-title">Reports & Submissions</h1>
      <p className="page-subtitle">View and manage report submissions</p>
      <p className="viewing-role">Viewing as: {userRole}</p>

      {userRole === "hr" && (
        <div className="report-actions">
          <button className="export-btn" onClick={handleExport}>
            📄 Export Summary
          </button>
        </div>
      )}

      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>Intern Name</th>
              <th>Project</th>
              <th>Status</th>
              <th>Submission Date</th>
              <th>Evaluation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.internName}</td>
                <td>{report.project}</td>
                <td>
                  <span
                    className={`status-tag ${
                      report.status === "Approved" ? "approved" : "pending"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td>{report.submissionDate}</td>
                <td>
                  {report.evaluation ? (
                    <span className="eval-text">{report.evaluation}</span>
                  ) : (
                    <em className="no-eval">Not reviewed</em>
                  )}
                </td>
                <td className="action-buttons">
                  {report.status !== "Approved" && (
                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(index)}
                    >
                      ✅ Approve
                    </button>
                  )}
                  {!report.certificateGenerated && report.status === "Approved" && (
                    <button
                      className="generate-btn"
                      onClick={() => handleGenerateCertificate(index)}
                    >
                      🎓 Generate Certificate
                    </button>
                  )}
                  {report.certificateGenerated && (
                    <button className="generated-btn" disabled>
                      ✔ Certificate Issued
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
