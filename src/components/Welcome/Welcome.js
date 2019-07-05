import React from 'react';
import './Welcome.css';

const Welcome = ({ name }) => {
  return (
    <div className="welcome">
      <p> {`Welcome, ${name}. How are you today?`} </p>
    </div>
  );
};



export default Welcome;
