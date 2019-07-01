import React from 'react';
import './TaskInput.css';


const TaskInput = () => {
  return (
    <div className="taskInput">
      <input type="text" placeholder="Enter Input"/>
      <div className="delete">X</div>
    </div>
  );
};

export default TaskInput;
