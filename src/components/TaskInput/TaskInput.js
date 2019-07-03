import React from 'react';
import './TaskInput.css';



const TaskInput = ({enterPress,  onInputChange, onAddClick }) => {
  return (
    <div>
      <div className="taskInput">
        {/* <div className="delete buttons" >x</div> */}
        <input  
          type="text" 
          placeholder="Enter Input" 
          autoFocus 
          id="entryField"
          onChange={onInputChange}
          onKeyDown={enterPress} />
        <button className='add buttons' id="#add" onClick={onAddClick} value="addButton">+
        </button>
      </div>

    </div>

  );
};

export default TaskInput;
