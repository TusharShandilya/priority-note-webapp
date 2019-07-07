import React from 'react';
import './Notes.css';
import pri1 from './one.png';
import pri2 from './two.png';
import pri3 from './three.png';
import pri4 from './four.png';
import pri5 from './five.png';


const Notes = ({ sNo, item, priority }) => {
  const imgName = (priorityNumber) => {
    switch(Number(priorityNumber)){
      case 5:
        return pri5;
        
      case 4:
        return pri4;
        
      case 3:
        return pri3;
        
      case 2:
        return pri2;
        
      case 1:
        return pri1;
        
      default:
        return pri3;
    }
  } 
  
  return (
    <div >
      <li 
      key= {sNo}>{`${item}`}&nbsp;&nbsp;<img src={imgName(priority)} className ="priorityNumber" />
      </li>
    </div>
  );
};

export default Notes;
