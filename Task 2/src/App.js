// src/App.js
import React, { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1 className="title">Create New Account</h1>
        <div className="contact-us">Contact Us</div>
      </header>
      
      {/* Form Container with Progress Bar at the Top */}
      <div className="form-box">
        <div className="progress-wrapper">
          <ProgressBar step={step} />
        </div>
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 prevStep={prevStep} />}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="back-login">← Back to Login</button>
        {step > 1 && <button className="prev-step" onClick={prevStep}>← Previous Step</button>}
        {step < 3 && <button className="next-step" onClick={nextStep}>Next Step →</button>}
      </div>
    </div>
  );
};

export default App;
