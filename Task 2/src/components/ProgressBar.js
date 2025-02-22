import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-container">
      <div className={`progress-step ${step === 1 ? "active" : ""}`}>
        <span className="step-number">1</span> Your Profile
      </div>
      <div className={`progress-step ${step === 2 ? "active" : ""}`}>
        <span className="step-number">2</span> Business Information
      </div>
      <div className={`progress-step ${step === 3 ? "active" : ""}`}>
        <span className="step-number">3</span> Additional Users
      </div>
    </div>
  );
};

export default ProgressBar;
