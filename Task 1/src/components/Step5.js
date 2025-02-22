import React, { useState } from "react";

const Step5 = ({ prevStep, nextStep }) => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Marketing Website Design", checked: false },
    { id: 2, text: "Branding Design", checked: false },
    { id: 3, text: "UI/UX Fundamentals", checked: true },
    { id: 4, text: "Wireframe and Prototyping", checked: false },
    { id: 5, text: "Style Guide", checked: false },
    { id: 6, text: "UX Research and Flows", checked: false },
    { id: 7, text: "Layout Design", checked: false },
    { id: 8, text: "frontend Develop", checked: false },
    { id: 9, text: "DBMS", checked: false },
    { id: 10, text: "Backend", checked: false },
    { id: 11, text: "User Experience", checked: false }
  ]);

  // Function to add a task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: taskInput, checked: false }]);
      setTaskInput("");
    }
  };

  // Function to toggle checkbox
  const toggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: !task.checked } : task)));
  };

  // Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="step step-5">
      <h2 className="step5-heading">Tasks</h2>

      <label className="step5-subheading">Add a task</label>
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="task-add-btn">Add</button>
      </div>

      {/* Task List */}
      <div className="task-list-container">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <input 
              type="checkbox" 
              checked={task.checked} 
              onChange={() => toggleTask(task.id)} 
              className="task-checkbox"
            />
            <span className={task.checked ? "task-text checked" : "task-text"}>
              {task.text}
            </span>
            <button className="task-delete-btn" onClick={() => removeTask(task.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step5;
