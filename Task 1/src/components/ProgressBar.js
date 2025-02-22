import React from "react";

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="progress-bar">
      {Array.from({ length: totalSteps }, (_, i) => (
        <span key={i} className={i < step ? "active" : ""}></span>
      ))}
    </div>
  );
};

export default ProgressBar;
