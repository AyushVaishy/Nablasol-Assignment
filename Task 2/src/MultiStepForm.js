import React, { useState } from "react";
import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";
import StepThree from "./components/Step3";
import ProgressBar from "./components/ProgressBar";
import FormNavigation from "./components/FormNavigation";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="multi-step-form">
      <h2 className="form-title">Create New Account</h2>
      <div className="top-nav">
        <p>Contact Us</p>
      </div>
      <ProgressBar step={step} />
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree prevStep={prevStep} />}
      <FormNavigation step={step} nextStep={nextStep} prevStep={prevStep} />
    </div>
  );
};

export default MultiStepForm;
