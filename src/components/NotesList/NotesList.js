import React from 'react';
import './NotesList.css';
import Notes from '../Notes/Notes';



const NotesList = ({ onDeleteClick, itemList }) => {
   
  const item =  itemList.map((user,i) => {
    return (
      <div key={i}>
        <div className="listedElement">
            <Notes
            sNo={itemList[i].sNo}
            item={itemList[i].item}
            priority={itemList[i].priority}
            />
            
            <p 
            className="delete" 
            id={`${i}`}
            onClick={onDeleteClick}>X</p>
         </div>
          <hr/>
      </div>
    );
  })

  return (
    <div className="notes">
      <ul>
        {item}
      </ul>

    </div>
  );
};

export default NotesList;
