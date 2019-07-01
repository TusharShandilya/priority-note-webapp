import React from 'react';
import './TaskInput.css';
import addSign from "./add.png";


const TaskInput = ({ children, onAddClick }) => {
  return (
    <div className="taskInput">
      {/* <div className="delete buttons" >x</div> */}
      <input  type="text" placeholder="Enter Input" autoFocus/>
      <button className='add buttons' id="#add" onClick={onAddClick} value="addButton">+
      </button>


    </div>

  );
};

export default TaskInput;
