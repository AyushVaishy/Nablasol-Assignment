import React from "react";

const Step1 = ({ nextStep }) => {
  return (
    <div className="form-container">
      <h3>Step 1</h3>
      <h2>Your Profile</h2>
      <p>Enter the login information for your account. You will be able to create additional user after registering.</p>

      <div className="form-group-row">
        <div className="form-group">
          <label>First Name*</label>
          <input type="text" placeholder="Input Your First Name" required/>
        </div>

        <div className="form-group">
          <label>Last Name*</label>
          <input type="text" placeholder="Input Your Last Name" required/>
        </div>
      </div>

      <div className="form-group-row">
        <div className="form-group">
          <label>Email*</label>
          <input type="email" placeholder="Input Your Email" required/>
        </div>

        <div className="form-group">
          <label>Phone Number*</label>
          <input type="text" placeholder="Input Your Phone Number" required/>
        </div>
      </div>

      <div className="form-group-row">
        <div className="form-group">
          <label>Password*</label>
          <input type="password" placeholder="Create Password" required/>
        </div>

        <div className="form-group">
          <label>Confirm Password*</label>
          <input type="password" placeholder="Confirm Your Password" required/>
        </div>
      </div>
    </div>
  );
};

export default Step1;
