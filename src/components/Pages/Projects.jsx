import React, { useState } from "react";
import "./Projects.css";

const Projects = ({ userRole }) => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    mentor: "",
    milestones: "",
    timeline: "",
    deliverables: "",
  });

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.mentor) return alert("Fill all fields");
    setProjects([...projects, newProject]);
    setNewProject({
      title: "",
      mentor: "",
      milestones: "",
      timeline: "",
      deliverables: "",
    });
  };

  const handleDelete = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  return (
    <div className="projects-container">
      <h1 className="page-title">Projects Management</h1>
      <p className="page-subtitle">Track project progress and milestones</p>
      <p className="viewing-role">Viewing as: {userRole}</p>

      {userRole === "hr" && (
        <form className="project-form" onSubmit={handleAddProject}>
          <h2 className="form-heading">Assign Project to Mentor</h2>
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
          />
          <input
            type="text"
            name="mentor"
            value={newProject.mentor}
            onChange={handleChange}
            placeholder="Assign to Mentor"
            required
          />
          <textarea
            name="milestones"
            value={newProject.milestones}
            onChange={handleChange}
            placeholder="Enter project milestones"
            rows="2"
          ></textarea>
          <input
            type="text"
            name="timeline"
            value={newProject.timeline}
            onChange={handleChange}
            placeholder="Project Timeline (e.g., 3 Months)"
          />
          <textarea
            name="deliverables"
            value={newProject.deliverables}
            onChange={handleChange}
            placeholder="Enter key deliverables"
            rows="2"
          ></textarea>
          <button type="submit" className="add-btn">
            ➕ Add Project
          </button>
        </form>
      )}

      <div className="project-list">
        <h2 className="list-heading">Assigned Projects</h2>
        {projects.length === 0 ? (
          <p className="no-data">No projects assigned yet.</p>
        ) : (
          projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <div className="card-header">
                <h3>{proj.title}</h3>
                <span className="mentor-name">Mentor: {proj.mentor}</span>
              </div>
              <p>
                <strong>Milestones:</strong> {proj.milestones}
              </p>
              <p>
                <strong>Timeline:</strong> {proj.timeline}
              </p>
              <p>
                <strong>Deliverables:</strong> {proj.deliverables}
              </p>
              {userRole === "hr" && (
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  ❌ Remove
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
