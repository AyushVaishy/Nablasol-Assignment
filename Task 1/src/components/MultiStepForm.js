import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import ProgressBar from "./ProgressBar";
import FormNavigation from "./FormNavigation";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 6) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleClose = () => {
    console.log("Close button clicked! (Dummy Functionality)");
  };

  return (
    <div className="form-container">
      <button className="close-btn" onClick={handleClose}>✕</button> {/* ✅ Close button */}

      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 prevStep={prevStep} nextStep={nextStep} />}
      {step === 3 && <Step3 prevStep={prevStep} nextStep={nextStep} />}
      {step === 4 && <Step4 prevStep={prevStep} nextStep={nextStep} />}
      {step === 5 && <Step5 prevStep={prevStep} nextStep={nextStep} />}
      {step === 6 && <Step6 prevStep={prevStep} onSubmit={() => alert("Project Created Successfully!")} />}

      <FormNavigation step={step} nextStep={nextStep} prevStep={prevStep} />
      <ProgressBar step={step} totalSteps={6} />
    </div>
  );
};

export default MultiStepForm;
