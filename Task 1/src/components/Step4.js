import React, { useState } from "react";
import Admin from "./Assets/admin.png"
import Guest from "./Assets/guest.png"
import Everyone from "./Assets/evryone.png"

const Step4 = ({ prevStep, nextStep }) => {
  const [selectedPermission, setSelectedPermission] = useState("admins"); // "Only Admin's" is active by default

  return (
    <div className="step step-4">
      <h2 className="step4-heading">Who can manage projects</h2>
      <p className="step4-subheading">Don’t panic — You can also customize this permission in settings.</p>

      {/* Permission Options */}
      <div className="permission-options">
        <div 
          className={`permission-option ${selectedPermission === "everyone" ? "active" : ""}`} 
          onClick={() => setSelectedPermission("everyone")}
        >
          <img src={Everyone} alt="Everyone" className="permission-icon" />
          <div className="permission-content">
            <h4>Everyone</h4>
            <p>All users can now see it, but guests cannot access the projects.</p>
          </div>
        </div>

        <div 
          className={`permission-option ${selectedPermission === "admins" ? "active" : ""}`} 
          onClick={() => setSelectedPermission("admins")}
        >
          <img src={Admin} alt="Only Admin's" className="permission-icon" />
          <div className="permission-content">
            <h4>Only Admin's</h4>
            <p>Only admins can manage everything.</p>
          </div>
        </div>

        <div 
          className={`permission-option ${selectedPermission === "specific" ? "active" : ""}`} 
          onClick={() => setSelectedPermission("specific")}
        >
          <img src={Guest} alt="Only Specific People" className="permission-icon" />
          <div className="permission-content">
            <h4>Only to Specific People</h4>
            <p>Only some specific people can able to see it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
