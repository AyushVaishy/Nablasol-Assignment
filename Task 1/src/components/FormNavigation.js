import React from "react";

const FormNavigation = ({ step, nextStep, prevStep, onSubmit }) => {
  return (
    <div className="form-navigation">
      <button className="back-btn" onClick={prevStep}>Back</button> {/* ✅ Back button always visible */}
      <button 
        className="next-btn" 
        onClick={step === 6 ? onSubmit : nextStep}
      >
        {step === 6 ? "Create Project" : "Next"} 
      </button>
    </div>
  );
};

export default FormNavigation;
