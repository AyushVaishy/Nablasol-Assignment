import React, { useState } from "react";

const Step2 = ({ prevStep, nextStep }) => {
  const [activeTab, setActiveTab] = useState("timeMaterials");
  const [hourlyRate, setHourlyRate] = useState("12,678.00");
  const [budgetExceed, setBudgetExceed] = useState("80.00");
  const [budgetReset, setBudgetReset] = useState(false);
  const [emailAlert, setEmailAlert] = useState(true);

  return (
    <div className="step step-2">
      <h2>Project Type</h2>
      <p className="subheading">Don’t panic — You can also customize this type in settings.</p>

      {/* Tabs */}
      <div className="tab-container">
        <button 
          className={`tab ${activeTab === "timeMaterials" ? "active" : ""}`} 
          onClick={() => setActiveTab("timeMaterials")}>
          Time & Materials
        </button>
        <button className="tab disabled">Fixed Fee</button>
        <button className="tab disabled">Non-Billable</button>
      </div>

      {/* Hourly Section */}
      <div className="section">
        <h3>Hourly</h3>
        <p className="description">We need hourly rates to track your project’s billable amount.</p>
        <div className="input-group">
          <select>  
            <option>Project Hourly Rate</option>
          </select>
          <input 
            type="text" 
            value={`₹ ${hourlyRate}`} 
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </div>
      </div>

      {/* Budget Section */}
      <div className="section">
        <h3>Budget</h3>
        <p className="description">We need hourly rates to track your project’s billable amount.</p>
        <div className="input-group">
          <select>
            <option>Hours per Person</option>
          </select>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={budgetReset} 
            onChange={() => setBudgetReset(!budgetReset)} 
          />
          Budget resets every month
        </label>
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={emailAlert} 
            onChange={() => setEmailAlert(!emailAlert)} 
          />
          Send email alerts if project exceeds 
          <input 
            type="text" 
            className="small-input" 
            value={budgetExceed} 
            onChange={(e) => setBudgetExceed(e.target.value)}
          /> 
          % of budget
        </label>
      </div>
    </div>
  );
};

export default Step2;
