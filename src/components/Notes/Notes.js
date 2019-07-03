import React from 'react';
import './Notes.css';


const Notes = ({ sNo, item }) => {
  return (
    <div >
      <li key= {sNo}>{`${item}`}</li>
    </div>
  );
};

export default Notes;
