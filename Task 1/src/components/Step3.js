import React, { useState } from "react";
import list from './Assets/list.png'
import Board from './Assets/kanban.png'

const Step3 = ({ prevStep, nextStep }) => {
  const [selectedView, setSelectedView] = useState("board"); // "board" is active by default

  return (
    <div className="step step-3">
      <h2 className="step3-heading">Select a view</h2>
      <p className="step3-subheading">You can also customize this view in settings.</p>

      {/* View Options */}
      <div className="view-options">
        <div 
          className={`view-option ${selectedView === "list" ? "active" : ""}`} 
          onClick={() => setSelectedView("list")}
        >
          <img src={list} alt="List View" className="view-icon" />
          <p>List</p>
        </div>

        <div 
          className={`view-option ${selectedView === "board" ? "active" : ""}`} 
          onClick={() => setSelectedView("board")}
        >
          <img src={Board} alt="Board View" className="view-icon" />
          <p>Board</p>
        </div>
      </div>
    </div>
  );
};

export default Step3;
