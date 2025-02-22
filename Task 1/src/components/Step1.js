import React from "react";

const Step1 = ({ nextStep }) => {
  return (
    <div className="step-1">
      <h2 className="fade-in">Create a project</h2>

      <label className="form-label">Project Name</label>
      <input 
        type="text" 
        placeholder="Enter project name here" 
        className="animated-input"
      />

      <label className="form-label">Client</label>
      <div className="client-row">
        <select className="animated-input">
          <option>Select a client</option>
          <option>Mr. Smith</option>
          <option>Miss Johnson</option>
          <option>Mark Davis</option>
          <option>Lewis Brown</option>
        </select>
        <span className="or-text">or</span>
        <button className="new-client-btn">+ New Client</button>
      </div>

      <label className="form-label">Dates</label>
      <div className="date-row">
        <input type="date" className="animated-input" />
        <span className="spn"> - </span>
        <input type="date" className="animated-input" />
      </div>

      <label className="form-label">Notes</label>
      <textarea placeholder="Optional" className="animated-textarea"></textarea>
    </div>
  );
};

export default Step1;
