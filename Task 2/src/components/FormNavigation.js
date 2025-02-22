import React from "react";

const FormNavigation = ({ step, nextStep, prevStep }) => {
  return (
    <div className="form-navigation">
      {step > 1 && <button onClick={prevStep} className="back-btn">← Back</button>}
      {step < 3 && <button onClick={nextStep} className="next-btn">Next Step →</button>}
    </div>
  );
};

export default FormNavigation;
