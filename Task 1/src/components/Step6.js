import React, { useState } from "react";

const Step6 = ({ prevStep, onSubmit }) => {
  const [nameInput, setNameInput] = useState("");
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Fanny Russell", checked: false },
    { id: 2, name: "Rodney Meyer", checked: false },
    { id: 3, name: "Ellen Simmons", checked: false },
    { id: 4, name: "Virgie Kim", checked: false },
    { id: 5, name: "Emma Castro", checked: false },
    { id: 5, name: "Emma Castro", checked: false },
    { id: 6, name: "Fanny Russell", checked: false },
    { id: 7, name: "Rodney Meyer", checked: false },
    { id: 8, name: "Ellen Simmons", checked: false },
    { id: 9, name: "Virgie Kim", checked: false },
    { id: 10, name: "Emma Castro", checked: false },
    { id: 11, name: "Emma Castro", checked: false }

  ]);

  const addName = () => {
    if (nameInput.trim() !== "") {
      setTeamMembers([...teamMembers, { id: teamMembers.length + 1, name: nameInput, checked: false }]);
      setNameInput("");
    }
  };

  const toggleName = (id) => {
    setTeamMembers(teamMembers.map(member => (member.id === id ? { ...member, checked: !member.checked } : member)));
  };

  const removeName = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="step step-6">
      <h2 className="step6-heading">Team</h2>

      <label className="step6-subheading">Invite or Add a person</label>
      <div className="name-input-container">
        <input
          type="text"
          placeholder="Add a person"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="name-input"
        />
        <button onClick={addName} className="name-add-btn">Add</button>
      </div>

      <div className="name-list-container">
        {teamMembers.map(member => (
          <div key={member.id} className="name-item">
            <input 
              type="checkbox" 
              checked={member.checked} 
              onChange={() => toggleName(member.id)} 
              className="name-checkbox"
            />
            <span className={member.checked ? "name-text checked" : "name-text"}>
              {member.name}
            </span>
            <button className="name-delete-btn" onClick={() => removeName(member.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step6;
