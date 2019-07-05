import React from 'react';
import './TaskInput.css';

const TaskInput = ({ onPriorityChange, enterPress,  onInputChange, onAddClick }) => {
  
  return (
    <div>
      <div className="taskInput">
        {/* <div className="delete buttons" >x</div> */}
        <input  
          type="text" 
          placeholder="What's on your mind?" 
          autoFocus 
          id="entryField"
          onChange={onInputChange}
          onKeyDown={enterPress} />
         <select 
          id="priority" 
          className="priorityList"
          onChange={ onPriorityChange }>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3" selected="selected">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select> 
        <button 
          className='add buttons' 
          id="#add" 
          onClick={onAddClick} 
          value="addButton">+
        </button>
      </div>

    </div>

  );
};

export default TaskInput;