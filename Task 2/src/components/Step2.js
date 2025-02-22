import React, { useState } from "react";

const Step2 = ({ nextStep, prevStep }) => {
  const [docStatus, setDocStatus] = useState({ 1: "", 2: "" });
  const [coiStatus, setCoiStatus] = useState({ 1: "" });

  const handleDocChange = (id, value) => {
    setDocStatus((prev) => ({ ...prev, [id]: value }));
  };

  const handleCoiChange = (id, value) => {
    setCoiStatus((prev) => ({ ...prev, [id]: value }));
  };


  return (
    <div className="step2-container">
      <h3 className="step2-title">Step 2</h3>
      <h2 className="step2-heading">Business Information</h2>
      <p className="step2-description">Please, enter information about your company.</p>
      
    <div className="step2-des">
    <p className="step2-blow">GENERAL INFORMATION</p>
    </div>      

      <div className="step2-form-group-row">
        <div className="step2-form-group">
          <label>Brand Name*</label>
          <input type="text" placeholder="Input Your Brand Name" />
        </div>
        <div className="step2-form-group">
          <label>Brand Type*</label>
          <select>
            <option>Select Type of Your Brand</option>
            <option>Local</option>
            <option>National</option>
          </select>
        </div>
      </div>

      <div className="step2-form-group-row">
        <div className="step2-form-group">
          <label>Street Address*</label>
          <input type="text" placeholder="Input Your Street Address" />
        </div>
        <div className="step2-form-group">
          <label>City*</label>
          <input type="text" placeholder="Input City" />
        </div>
      </div>

      <div className="step2-form-group-row">
        <div className="step2-form-group">
          <label>Zip Code*</label>
          <input type="text" placeholder="Input Zip Code" />
        </div>
        <div className="step2-form-group">
          <label>Tax ID Number*</label>
          <input type="text" placeholder="Input Tax ID Number" />
        </div>
      </div>

 {/* Document Section */}
 <div className="step2-document-section">
        <h4>DOCUMENTS</h4>
        <p>Once the following documents are signed, you'll be ready to get started</p>

        <div className="step2-document-item">
          <input type="text" value="Electronically sign the agreement(s)" disabled />
          <select className="step2-select" onChange={(e) => handleDocChange(1, e.target.value)}>
            <option value="">Select</option>
            <option value="correct">✔</option>
            <option value="wrong">✖</option>
          </select>
          <span className={`step2-status ${docStatus[1]}`}>{docStatus[1] === "correct" ? "✔" : docStatus[1] === "wrong" ? "✖" : ""}</span>
        </div>

        <div className="step2-document-item">
          <input type="text" value="Non adult beverage Kroger market supplier waiver and release" disabled />
          <select className="step2-select" onChange={(e) => handleDocChange(2, e.target.value)}>
            <option value="">Select</option>
            <option value="correct">✔</option>
            <option value="wrong">✖</option>
          </select>
          <span className={`step2-status ${docStatus[2]}`}>{docStatus[2] === "correct" ? "✔" : docStatus[2] === "wrong" ? "✖" : ""}</span>
        </div>
      </div>

      {/* COI PDF Upload Section */}
      <div className="step2-coi-section">
        <h4>COI PDF UPLOAD</h4>
        <p>Once the following documents are signed, you'll be ready to get started</p>

        <div className="step2-coi-item">
          <input type="text" value="Electronically sign the agreement(s)" disabled />
          <select className="step2-select" onChange={(e) => handleCoiChange(1, e.target.value)}>
            <option value="">Select</option>
            <option value="correct">✔</option>
            <option value="wrong">✖</option>
          </select>
          <span className={`step2-status ${coiStatus[1]}`}>{coiStatus[1] === "correct" ? "✔" : coiStatus[1] === "wrong" ? "✖" : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;
